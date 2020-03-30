/*jshint esversion: 6 */
const axios = require('axios').default;

/*
Class Parser
INPUT VALUE TO CONSTRUCTOR:
	connection - object of mysql2 connector
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
6) getDataFromDB - this method give data from DB
PARAMETERS: 
	auction - current auction (optional. If you want get all data just set auction = *)

*/

class Parser{
	constructor(connection){
		this.stopPage = 1;
		this.connection = connection;
	}

	sendRequest(url, method){
		return axios({
	    	method: method,
	    	url: url,
	    	headers: {'Content-Type': 'application/x-www-form-urlencoded',
	    	'Access-Control-Allow-Headers': 'x-access-token',
	    	'x-access-token': Math.floor(1 + Math.random() * (1000000 + 1 - 1)),
	    	'User-Agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36' }
	    })
	    .then(function(response){
	    	return response.data;
	    })
	    .catch(function (response){
	        console.log(response);
	    });
	}

	startParsing(){
		console.log('Parsing Copart...');
		this.setFullCopartList(0, true);
	}

	getFullCopartList(page, isAuto){
		let url = `https://www.copart.com/public/lots/search?size=10&page=${page}`;
		this.sendRequest(url, 'POST').then(result => {
			let results = result.data.results;
			if(results !== undefined){
				this.stopPage = Math.floor(results.totalElements / 30000);
				console.log(results.content);
				// Data to DB
				this.setDataToDB(results.content, 'Copart'); 
				// Recursion while last page of copart > current page
				if(this.stopPage > page && isAuto){
					console.log(`Copart: ${page} page of ${this.stopPage}`);
					this.setFullCopartList(page + 1, true);
				}else{
					console.log('Parsing finish!');
				}

			}else{
				console.log('Parser error 500');
			}
		});
	}
	
	getFullAiiaList(page, isAuto){

	}

	setDataToDB(data, auction){
		if(auction === 'Copart'){

			let query = 'INSERT INTO car_lots VALUES';

			for(let i = 0; i < data.length; i++){
				let lot = data[i];
				let delimiter = i == data.length - 1 ? '' : ',';

				query += `(NULL, 2, ${lot.ln}, '${lot.mkn}', '${lot.lm}',
				${lot.lcy}, ${lot.la}, ${lot.orr}, '${lot.egn}', ${lot.cy},
				'${lot.cuc}', ${lot.hb}, '${lot.tims}', '${lot.tmtp}',
				'${lot.bstl}', '${lot.lcd}', '${lot.ft}')${delimiter}`;
			}
			console.log(query);
			this.connection.query(query).then(result => {
				console.log(result);
			});
		}else{

		}
	}
	getDataFromDB(auction){
		if(auction === '*'){

		}else{
			
		}
	}
}

module.exports = Parser;