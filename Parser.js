/*jshint esversion: 6 */
const axios = require('axios').default;
const cheerio = require("cheerio");
const phantom = require('phantom');

/*
Class Parser
INPUT VALUE TO CONSTRUCTOR:
	connection - object of mysql2 connector
	fs - Object of fs module 
METHODS:
1) sendRequest - for send requests to the server
PARAMETERS: 
	url - server url
	method - method of request
2) startParsing - this is main method of the parser. 
This method begin parsing information from Copart and AIIA
3) getFullCopartList - parsing information from Copart by page
PARAMETERS:
	page - current page of list
	isAuto - if set true then parser working automate 
	else we can set false and choise page to parse 
	(if we set page 0 and set isAuto true then parsing was automate and start from zero (it`s a true way :) ) 
4) getFullAiiaList - parsing information from AIIA by page
PARAMETERS - same as in #3 method
5) setDataToDB - this method set new parser data to DB
PARAMETERS:
	data - new data from parser (this is Array of Object)
	auction - current auction
6) toLog - this method allow write logs to the certain file
PARAMETERS:
	type - type of logs
	text - text of logs
*/

class Parser{
	constructor(connection, fs){
		this.stopPage = 1;
		this.connection = connection;
		this.fs = fs;
		this.last_AIIA_value = null;
		this.deleteOldData = true; // Set false if you want save old lots in DB
	}

	sendRequest(url, method, data){
		return axios({
	    	method: method,
	    	url: url,
	    	headers: {'Content-Type': 'application/x-www-form-urlencoded',
	    	'Access-Control-Allow-Headers': 'x-access-token',
	    	'Cookie': 'ASP.NET_SessionId=idarg1cujosl2zu05qmacszf; LAST_INVITATION_VIEW=1586951555336;',
	    	'x-access-token': Math.floor(1 + Math.random() * (1000000 + 1 - 1)),
	    	'User-Agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36' },
	    	data: data
	    })
	    .then(function(response){
	    	return response.data;
	    })
	    .catch(function (response){
	        console.log(response);
	    });
	}

	startParsing(){
		console.log('Parsing data from Copart...');
			this.connection.query("SELECT MAX(wave) FROM car_lots;").then(result => {
				let wave = result[0][0]['MAX(wave)'];
				// Set wave of parsing cycle
				wave = wave === null ? wave = 0 : wave + 1;

				if(wave > 3 && this.deleteOldData){
					this.connection.query(`DELETE FROM car_lots WHERE wave=${wave - 3};`).then(result => {
						console.log(`!!!Delete ${wave - 3} wave from DB!!!`);
					});
				}

				this.getFullCopartList(0, wave, true);
				this.toLog('work', `Parser start ${new Date()}`);
			});
	}

	getFullCopartList(page, wave, isAuto){
		let url = `https://www.copart.com/public/lots/search?size=30000&page=${page}`;
		this.sendRequest(url, 'POST', '').then(result => {
			let results = result.data.results;
			if(results !== undefined){
				this.stopPage = Math.floor(results.totalElements / 30000);
				// Data to DB
				this.setDataToDB(results.content, wave, 'Copart'); 
				// Recursion while last page of copart > current page
				if(this.stopPage > page && isAuto){
					console.log(`Copart: ${page} page of ${this.stopPage}`);
					this.getFullCopartList(page + 1, wave, true);
					return true;
				}else{
					console.log('Copart parsing finish!');
					console.log('Parsing data from AIIA...');
					this.getFullAiiaList(1, wave, true);
				}

			}else{
				console.log('Parser error 500');
				this.toLog('error', `Parser error. Auction - Copart, Date - ${new Date()}`);
			}
		});
	}
	
	getFullAiiaList(page, wave, isAuto){
		console.log(`This is a ${page} page`);
		let url = `https://www.iaai.com/VehicleSearch/OnChangeKey`;
		let data = `URL=%2FVehicleSearch%2FSearchDetails%3FKeyword%3D%26url%3DGG%2FSC8A8WWNiMrUWNHTjeILbgZhFnhs1qCYC997G0JK1%2BMNa7DqJU64tdx2JZ0mvhzzFfNzCMDWZdEvvNg%2BbX8THVuMIFYLbMJRqBwP8keQodNEgqVyVuoZAAHZD3Iv2BV0EKZFZ9ftMYPYnAzfbTmmrhBpXz%2FC0U43nOWWZXaRaVvvAl2bDOVkhWFg%2B%2FLu1bzed59FA1A5tkMB9YO65qgdEXfaTlDlL1hayHVyACoxmr6kVpkjha13044OMj1lqFEb%2Brn%2BpYltaTHADupTcHA%3D%3D%26quickfilters%3D%26selectedRefiners%3D&Key=pg&Value=${page}`;
		this.sendRequest(url, 'POST', data).then(result => {
			let url = `https://www.iaai.com${result}`;
			this.sendRequest(url, 'GET', '').then(res => {
				let $ = cheerio.load(res);
				let url_array = [];
				let data = $(".data-list__item > a");
				let img = $(".img-responsive");

				if(data.length === 0 && page === 1){
					console.log("AIIA ERROR! Parsing finish.");
					this.toLog('error', `Parser error. Auction - AIIA, Date - ${new Date()}`);
					return false;
				}else{
					let img_counter = 0;
					for(let i = 0; i < data.length; i++){
						let url = data[i].attribs.href;
						if(url.indexOf("/vehicledetails/") !== -1){
							//url_array.push({url: url, img: img[img_counter].attribs.src});
							//img_counter++;

							this.getAiiaVehicleById(null, null, true, wave, url);
						}
					}

					if(data.length < 9 && page > 1){
						console.log('AIIA parsing finish!');
					}else{
						setTimeout(() => {
							this.getFullAiiaList(++page, wave, isAuto);
						}, 3500);
					}

				}
			}).catch(err => {
				console.log(err);
				this.getFullAiiaList(page, wave, isAuto);
			});
		});
	}

	getAiiaVehicleById(id, res, toDB, wave, url){
		let that = this;
		if(!toDB){
			url = `https://www.iaai.com/VehicleSearch/SearchDetails?SearchStockNum=${id}`;
		}
		this.sendRequest(url, 'GET', '').then(result => {
			try{
				let car = {};
				let delta = 0;
		       	let $ = cheerio.load(result);
		      	let v_inf = $(".data-list.data-list--details > li");
		       	let v_header = $(".heading-2.heading-2-semi.mb-0");

	        	v_header = v_header[0].children[0].data.split(' ');

	        	car.minBA = result.split('MinimumBidAmount')[1].split('"')[1];
		       	car.minBA = car.minBA.substr(1, car.minBA.length - 2);

				car.mark = v_header[1];
				car.year = parseInt(v_header[0]);
				car.currency = 'USD';
				car.carImage = '';
				car.status = 'active';
				car.market_value = -1;
				car.price = -1;
				car.buy_now_price = -1;
				car.lot_num = -1;
				car.model = -1;
				car.odometer = -1;
				car.engine = -1;
				car.cylindres = -1;
				car.transmission = -1;
				car.body_type = -1;
				car.driveUnit = -1;
				car.fuelType = -1;

				for(let i = 1; i < v_inf.length; i++){
				 	let title = v_inf[i];
					let info = v_inf[i];

					if(title.children[1] && title.children[1].children[0]){
						title = title.children[1].children[0].data;
					}else{
					  	title = '';
					}

					if(info.children[3] && info.children[3].children[0]){
					 	 info = info.children[3].children[0].data;
					}else{
						info = '';
					}

					title = title ? title.trim() : '';
					info = info ? info.trim() : '';

					switch(title){
						case "Stock #:":
					  		if(car.lot_num === -1) car.lot_num = info;
					  		break;
					 	case "Model:":
					  		if(car.model === -1) car.model = info;
					  		break;
					 	case "Odometer:":
					  		let odometer = parseInt(info.replace(/,/g, ""));
					  		if(car.odometer === -1 && !isNaN(odometer)) car.odometer = odometer;
					  		break;
					 	case "Engine:":
					  		if(car.engine === -1) car.engine = v_inf[i].children[7].children[0].data;
					  		break;
					 	case "Cylinders:":
					  		let cylindres = parseInt(info);
					  		if(car.cylindres === -1 && !isNaN(cylindres)){
					   			car.cylindres = cylindres;
					  		}
					  		break;
					 	case "Current Bid:":
					  		let price = parseInt(info.slice(1).replace(/,/g, ""));
					  		if(car.price === -1 && !isNaN(price)){
					   			car.price = price;
					  		}
					  		break;
					 	case "Buy Now Price:":
					  		let now_price = parseInt(info.slice(1).replace(/,/g, ""));
					  		if(car.buy_now_price === -1 && !isNaN(now_price)){
					   			car.buy_now_price = now_price;
					  		}
					  		break;
					 	case "Actual Cash Value:":
					  		let market_value = parseInt(info.slice(1).replace(/,/g, ""));
					  		if(car.market_value === -1 && !isNaN(market_value)){
					   			car.market_value = market_value;
					  		}
					  		break;
					 	case "Transmission:":
					  		if(car.transmission === -1) car.transmission = info;
					  		break;
					 	case "Body Style:":
					  		if(car.body_type === -1) car.body_type = info;
					  		break;
					 	case "Drive Line Type:":
					  		if(car.driveUnit === -1) car.driveUnit = info;
					  		break;
					 	case "Fuel Type:":
					  		if(car.fuelType === -1) car.fuelType = info;
					  		break;
					}
				}

				console.log(car);

				if(toDB){
					that.setDataToDB(car, wave, 'AIIA');
				}else{
					res.send(car);
				}

				}catch(e){
					console.log(e);
					that.toLog('error', `Load page error. Auction - AIIA, Date - ${new Date()}`);
					if(!toDB) res.send([]);
				}
		});
	}

	toLog(type, text){
		let log_name = null;
		if(type === 'error'){
			log_name = 'error_log.txt';
		}else if(type === 'work'){
			log_name = 'work_log.txt';
		}

		this.fs.appendFile(`logs/${log_name}`, text, function(err){
			if(err){
			    return console.log(err);
			}
		}); 
	}

	setDataToDB(data, wave, auction){
		if(auction === 'Copart'){

			let query = 'INSERT INTO car_lots VALUES';

			for(let i = 0; i < data.length; i++){
				let lot = data[i];
				let delimiter = i == data.length - 1 ? '' : ',';

				// Check value for undefined
				// CHANGE THIS CODE WHEN YOU WILL HAVE TIME! 

				lot.ln = lot.ln ? lot.ln : 0;
				lot.mkn = lot.mkn ? lot.mkn.replace(/"/g, " ") : 0;
				lot.lm = lot.lm ? lot.lm.replace(/"/g, " ") : 0;
				lot.lcy = lot.lcy ? lot.lcy : 0;
				lot.la = lot.la ? lot.la : 0;
				lot.orr = lot.orr ? lot.orr : 0;
				lot.egn = lot.egn ? lot.egn : 0;
				lot.cy = lot.cy ? lot.cy : 0;
				lot.cuc = lot.cuc ? lot.cuc : 0;
				lot.hb = lot.hb ? lot.hb : 0;
				lot.tims = lot.tims ? lot.tims : 0;
				lot.tmtp = lot.tmtp ? lot.tmtp : 0;
				lot.bstl = lot.bstl ? lot.bstl : 0;
				lot.lcd = lot.lcd ? lot.lcd : 0;
				lot.ft = lot.ft ? lot.ft : 0;

				lot.ln = isNaN(+lot.ln) ? 0 : lot.ln;
				lot.lcy = isNaN(+lot.lcy) ? 0 : lot.lcy;
				lot.la = isNaN(+lot.la) ? 0 : lot.la;
				lot.orr = isNaN(+lot.orr) ? 0 : lot.orr;
				lot.cy = isNaN(+lot.cy) ? 0 : lot.cy;
				lot.hb = isNaN(+lot.hb) ? 0 : lot.hb;

				// Create INSERT query 
				query += `(NULL, ${wave}, ${lot.ln}, "${lot.mkn.toLowerCase()}", "${lot.lm.toLowerCase()}",
				${lot.lcy}, ${lot.la}, ${lot.orr}, "${lot.egn}", ${lot.cy},
				"${lot.cuc}", ${lot.hb}, "${lot.tims}", "${lot.tmtp}",
				"${lot.bstl}", "${lot.lcd}", "${lot.ft}", "${lot.ord}",
				"${auction}", -1)${delimiter}`;
			}

			this.connection.query(query).then(result => {
				//console.log("DATA IN DB!");
			});

		}else{
			let query = 'INSERT INTO car_lots VALUES';
			// buy_now_price

			// Create INSERT query 
			query += `(NULL, ${wave}, ${data.lot_num}, "${data.mark.toLowerCase()}", "${data.model.toLowerCase()}",
			${data.year}, ${data.market_value}, ${data.odometer}, "${data.engine}", ${data.cylindres},
			"${data.currency}", ${data.price}, "${data.carImage}", "${data.transmission}",
			"${data.body_type}", "${data.driveUnit}", "${data.fuelType}", "${data.status}",
			"${auction}", ${data.minBA});`;

			this.connection.query(query).then(result => {
				//console.log("DATA IN DB!");
			}).catch(err => {
				console.log(err);
			});
		}
	}
}

module.exports = Parser;