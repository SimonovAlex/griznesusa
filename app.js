/*jshint esversion: 6 */
//const FormData = require('form-data');
const axios = require('axios').default;
const express = require("express");
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');
const fs = require('fs');
const Parser = require('./Parser');


let settings = {
	enable: false,
	scan_interval: 30 // In minutes
};

// Connect to mysql DB
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'car_parser',
	password: 'root'
}).promise();

let parser = new Parser(connection, fs);
// For test (Delete in prodaction!)
parser.getFullCopartList(0, false);

// ========== ROUTING - START ==========
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


/*
Дать возможность получать отдельно данные по аукционам и по всем сразу
Сортировка:
	- по марке
	- топливе 
	- модель (если выбрана марка)
	- году выпуска
*/


app.get("/getAllLots", function(req, res){
	
});

app.get("/getCopartAllLots", function(req, res){
	
});

app.get("/getAiiaAllLots", function(req, res){
	
});

setTimeout(function tick(){
	if(settings.enable) parser.startParsing();

	setTimeout(tick, 60000 * settings.scan_interval);
}, 60000 * settings.scan_interval);


/*
EXAMPLE COOPART WITH FILTERS FIELDS
https://www.copart.com/public/lots/search?size=15&filter%5BMAKE%5D=lot_make_desc%3A%22AIRS%22%2Clot_make_desc%3A%22ALFA+ROMEO%22%2Clot_make_desc%3A%22AERO%22
*/