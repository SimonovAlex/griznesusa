/*jshint esversion: 6 */
const axios = require('axios').default;
const express = require("express");
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const Parser = require('./Parser');

let settings = {
	enable: true,
	port: 5000,
	scan_interval: 1440, // In minutes
	ready: false,
	min_count: 100000
};

// Connect to mysql DB
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root', // parser
	database: 'car_parser',
	password: 'root' // fokcar
}).promise();

let parser = new Parser(connection, fs);
// ========== ROUTING - START ==========
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', require('./routes/invoice.router'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

if (process.env.NODE_ENV === 'prod'){
    app.use('/', express.static(path.join(__dirname, 'client', "build")));
}


app.get("/car", function(req, res){
	let query = null;
	let data = req.query;
	let auction = data.auction === 'copart' ? '"Copart"' : data.auction === 'aiia' ? '"AIIA"' : 'auction'; 
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
	}else{ // id
		query = `SELECT * FROM car_lots WHERE lotNumber = ${data.id} AND 
		auction=${auction} AND wave = (SELECT MAX(wave) 
		FROM car_lots GROUP BY wave HAVING COUNT(id) > ${settings.min_count} 
		AND MAX(wave))`;
	}
	console.log(query);
	connection.query(query).then(result => {
		res.send(result[0]);
	}).catch(err => {
		console.log("SQL ERROR");
		res.send([]);
	});
});

app.get("/car/list", function(req, res){
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
    }));

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
		setTimeout(() => {
			parser.startParsing();
		}, 5000);
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