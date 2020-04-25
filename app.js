/*jshint esversion: 6 */
const axios = require('axios').default;
const express = require("express");
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const Parser = require('./Parser');

let settings = {
	enable: false,
	port: 5000,
	scan_interval: 1440, // In minutes
	ready: false,
	min_count: 100000
};

// Connect to mysql DB
const connection = mysql.createPool({
	host: 'localhost',
	user: 'parser',
	database: 'car_parser',
	password: 'root' //fokcar
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


if (process.env.NODE_ENV === 'prod'){
    app.use('/', express.static(path.join(__dirname, 'client', "build")));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get("/car", function(req, res){
	let data = req.query;
	let auction = data.auction === 'copart' ? '"Copart"' : data.auction === 'aiia' ? '"AIIA"' : 'auction'; 
	data.limit = data.limit > 0 ? data.limit : 0;
	data.page = data.page > 0 ? data.page : 0;

	connection.query(`SELECT * FROM car_lots WHERE auction = ${auction} AND wave = (SELECT MAX(wave) FROM car_lots GROUP BY wave HAVING COUNT(id) > ${settings.min_count} AND MAX(wave)) LIMIT ${data.limit} OFFSET ${data.page};`).then(result => {
		res.send(result[0]);
	});
});

function start() {
    const io = require('socket.io').listen(app.listen(settings.port, function(){
        console.log('SERVER STARTED AT ' + new Date());
        settings.ready = true;
    }));

    // Start parsing new data every settings.scan_interval min
	setTimeout(function tick(){
		if(settings.enable && settings.ready) parser.startParsing();
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