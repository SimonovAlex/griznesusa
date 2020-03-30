/*jshint esversion: 6 */
//const FormData = require('form-data');
const axios = require('axios').default;
const express = require("express");
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');
const Parser = require('./Parser');


// Connect to mysql DB
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'car_parser',
	password: 'root'
}).promise();

let parser = new Parser(connection);
//parser.startParsing();
parser.getFullCopartList(0, false);

// ========== ROUTING - START ==========
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Show index.html
app.get("/", function(req, res){
	res.sendFile(__dirname + '/index.html');
});






/*
EXAMPLE COOPART WITH FILTERS FIELDS
https://www.copart.com/public/lots/search?size=15&filter%5BMAKE%5D=lot_make_desc%3A%22AIRS%22%2Clot_make_desc%3A%22ALFA+ROMEO%22%2Clot_make_desc%3A%22AERO%22
*/