/*jshint esversion: 6 */
const axios = require('axios').default;
const express = require("express");
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');
const fs = require('fs');
const Parser = require('./Parser');


let settings = {
	enable: false,
	port: 3000,
	scan_interval: 30 // In minutes
};

// Connect to mysql DB
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'car_parser',
	password: 'root'
}).promise();

let parser = new Parser(connection, fs);
// For test (Delete in prodaction!)
//parser.getFullCopartList(0, false);
//parser.getFullAiiaList(1, false);
parser.startParsing();

// ========== ROUTING - START ==========
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const io = require('socket.io').listen(app.listen(settings.port, function(){
	console.log('SERVER STARTED AT ' + new Date());
}));
/*
Дать возможность получать отдельно данные по аукционам и по всем сразу
Сортировка:
	- по марке
	- топливе 
	- модель (если выбрана марка)
	- году выпуска
*/

app.post("/getAllLots", function(req, res){
	let data = req.body;
	connection.query(`SELECT * FROM car_lots WHERE wave=(SELECT MAX(wave) FROM car_lots) LIMIT ${data.limit} OFFSET ${data.page};`).then(result => {
		res.send(result[0]);
	});
});

app.post("/getCopartAllLots", function(req, res){
	let data = req.body;
	connection.query(`SELECT * FROM car_lots WHERE auction='Copart' AND wave=(SELECT MAX(wave) FROM car_lots) LIMIT ${data.limit} OFFSET ${data.page};`).then(result => {
		res.send(result[0]);
	});
});

app.post("/getAiiaAllLots", function(req, res){
	let data = req.body;
	connection.query(`SELECT * FROM car_lots WHERE auction='AIIA' AND wave=(SELECT MAX(wave) FROM car_lots) LIMIT ${data.limit} OFFSET ${data.page};`).then(result => {
		res.send(result[0]);
	});
});

setTimeout(function tick(){
	if(settings.enable) parser.startParsing();
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

 
/*
EXAMPLE COOPART WITH FILTERS FIELDS
https://www.copart.com/public/lots/search?size=15&filter%5BMAKE%5D=lot_make_desc%3A%22AIRS%22%2Clot_make_desc%3A%22ALFA+ROMEO%22%2Clot_make_desc%3A%22AERO%22
*/     