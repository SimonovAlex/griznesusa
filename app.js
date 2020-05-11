/*jshint esversion: 6 */
const bodyParser = require('body-parser'); 
const axios = require('axios').default;
const Parser = require('./Parser');
const express = require("express");
const mysql = require('mysql2');
const https = require('https');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
 
// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/psminvoice.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/psminvoice.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/psminvoice.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}; 

let settings = {
	enable: true,
	port: 80,
	scan_interval: 2880, // In minutes
	ready: false,
	min_count: 100000
};

// Connect to mysql DB
const connection = mysql.createPool({
	host: 'localhost',
	user: 'parser', // parser
	database: 'car_parser',
	password: 'fokcar' // fokcar
}).promise();

let parser = new Parser(connection, fs);
// ========== ROUTING - START ==========
const app = express();
app.use(express.static(__dirname, {dotfiles: 'allow'}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', require('./routes/invoice.router'));
app.use('/', express.static(path.join(__dirname, 'client', "build")));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accepts');

    app.options('*', (req, res) => {
        res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });

    next();
});

app.get("/", function(req, res){
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get("/car", cors({ origin: false }) ,function(req, res){
	let query = null;
	let data = req.query;
	let auction = data.auction ? data.auction.toLowerCase() : data.auction;
	auction = auction === 'copart' ? '"Copart"' : data.auction === 'aiia' ? '"AIIA"' : 'auction'; 
	let model = data.model;
	let mark = data.mark;
	let year = parseInt(data.year);

	if(isNaN(parseInt(data.id)) && model){ // model, mark, year
		query = `SELECT AVG(price) * 0.3, MIN(price) * 0.3, MAX(price) * 0.3 FROM car_lots 
		WHERE auction=${auction} AND price > 0 AND model = "${model}" 
		AND mark = "${mark}" AND year = ${year};`;
	}else if(isNaN(parseInt(data.id)) && !model){
		query = `SELECT AVG(price) * 0.3, MIN(price) * 0.3, MAX(price) * 0.3 FROM car_lots 
		WHERE auction=${auction} AND price > 0 AND mark = "${mark}" 
		AND year = ${year};`;
	}else if(!isNaN(parseInt(data.id)) && auction === '"Copart"'){ // id
		query = `SELECT * FROM car_lots WHERE lotNumber = ${data.id} AND 
		auction=${auction} AND wave = (SELECT MAX(wave) 
		FROM car_lots HAVING COUNT(id) > ${settings.min_count}) LIMIT 1;`;
	}else{
		parser.getAiiaVehicleById(data.id, res, false);
	}

	/*
	id, wave, lotNumber, mark, model, year, marketValue,
	odometer, engine, numberOfCylinders, currency, price, carImage, transmission,
	body_type, driveUnit, fuelType, status, auction
	*/

	if(query === null) return false;
	console.log(query);
	connection.query(query).then(result => {
		res.send(result[0]);
	}).catch(err => {
		console.log("SQL ERROR");
		res.send([]);
	});
});

app.get("/car/list", cors({ origin: false }), function(req, res){
	let query = `SELECT DISTINCT mark, model, year FROM car_lots 
	WHERE model != "-1" AND mark != "-1" AND year != -1 ORDER BY model;`;

	connection.query(query).then(result => {
		function groupBy(objectArray, mark, model){
		  	return objectArray.reduce(function (acc, obj){
		    let key1 = obj[mark];
		    let key2 = obj[model];
		    if (!acc[key1]){
		      acc[key1] = {};
		    }

		    if(!acc[key1][key2]){
		      acc[key1][key2] = [];
		    }
		    acc[key1][key2].push(obj.year);
		    return acc;
		  	}, {});
		}

		let mark = groupBy(result[0], 'mark', 'model');

		for(let m in mark){
			if(!isNaN(parseInt(m))) delete(mark[m]);
		}

		res.send(JSON.stringify(mark));
	}).catch(err => {
		console.log("SQL ERROR");
		res.send([]);
	});
});

function start() {
    const io = require('socket.io').listen(app.listen(settings.port, function(){
        console.log('SERVER STARTED AT ' + new Date());
        settings.ready = true;
	setTimeout(() => {parser.startParsing();}, 5000);
    }));

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
    });

    // Start parsing new data every settings.scan_interval min
	setTimeout(function tick(){
		if(settings.enable && settings.ready){
			io.sockets.emit('update_session');
			setTimeout(() => {parser.startParsing();}, 5000);
		} 
		setTimeout(tick, 60000 * settings.scan_interval);
	}, 60000 * settings.scan_interval);

	//	Sockets
	io.sockets.on('connection', function(client){
		console.log("I FIND EXTENSION");
		io.sockets.emit('update_session');
	});

	// Update session every hour
	setInterval(function(){
		io.sockets.emit('update_session');
	}, 900000);
}

start();

/*
EXAMPLE COOPART WITH FILTERS FIELDS
https://www.copart.com/public/lots/search?size=15&filter%5BMAKE%5D=lot_make_desc%3A%22AIRS%22%2Clot_make_desc%3A%22ALFA+ROMEO%22%2Clot_make_desc%3A%22AERO%22
*/     
