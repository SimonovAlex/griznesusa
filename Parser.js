/*jshint esversion: 6 */
const axios = require('axios').default;
const cheerio = require("cheerio");
const phantom = require('phantom');

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
		console.log('Parsing data...');
			this.connection.query("SELECT MAX(wave) FROM car_lots;").then(result => {
				let wave = result[0][0]['MAX(wave)'];
				// Set wave of parsing cycle
				wave = wave === null ? wave = 0 : wave + 1;

				this.getFullCopartList(0, wave, true);
				this.getFullAiiaList(1, wave, true);

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
				}

			}else{
				console.log('Parser error 500');
				this.toLog('error', `Parser error. Auction - Copart, Date - ${new Date()}`);
			}
		});
	}
	
	getFullAiiaList(page, wave, isAuto){
		console.log(`This is a ${page} page`);
		let url = `https://www.iaai.com/AdvancedSearch/GetSearchResults`;
		let data = `model%5BSegments%5D%5B%5D=cbATypeClassic&model%5BSegments%5D%5B%5D=cbATypeHighEnd&model%5BSegments%5D%5B%5D=cbATypeHybrid&model%5BSegments%5D%5B%5D=cbATypePickUp&model%5BSegments%5D%5B%5D=cbATypeSedan&model%5BSegments%5D%5B%5D=cbATypeSUV&model%5BSelectedType%5D=rbAMType&model%5BSelectedSalvagetypes%5D%5B%5D=1&model%5BYearFilter%5D%5BStartYear%5D=&model%5BYearFilter%5D%5BEndYear%5D=&model%5BLocationFilter%5D%5BLocationType%5D=All&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AK&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AZ&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AR&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CO&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=DE&model%5BLocationFilter%5D%5BStates%5D%5B%5D=FL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=GA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=HI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ID&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=KS&model%5BLocationFilter%5D%5BStates%5D%5B%5D=KY&model%5BLocationFilter%5D%5BStates%5D%5B%5D=LA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ME&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MD&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MS&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MO&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NE&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NV&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NH&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NJ&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NM&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NY&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NC&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ND&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OH&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OK&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OR&model%5BLocationFilter%5D%5BStates%5D%5B%5D=PA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=RI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=SC&model%5BLocationFilter%5D%5BStates%5D%5B%5D=SD&model%5BLocationFilter%5D%5BStates%5D%5B%5D=TN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=TX&model%5BLocationFilter%5D%5BStates%5D%5B%5D=UT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=VT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=VA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WV&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WY&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=438&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=200&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=201&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=203&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=901&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=660&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=631&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=140&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=626&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=437&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=131&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=372&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=522&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=751&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=651&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=710&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=707&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=706&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=705&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=418&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=607&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=719&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=422&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=361&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=727&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=341&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=609&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=658&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=647&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=652&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=624&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=645&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=376&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=614&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=720&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=714&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=752&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=514&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=515&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=511&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=653&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=661&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=745&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=663&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=113&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=762&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=662&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=746&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=412&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=726&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=441&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=443&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=534&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=656&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=370&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=374&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=536&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=516&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=731&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=770&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=332&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=420&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=629&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=309&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=363&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=435&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=502&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=132&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=749&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=763&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=465&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=772&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=334&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=337&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=518&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=715&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=761&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=428&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=427&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=623&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=638&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=133&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=114&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=456&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=414&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=440&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=729&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=541&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=425&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=712&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=527&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=754&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=760&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=152&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=722&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=780&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=509&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=423&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=613&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=419&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=134&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=665&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=669&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=402&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=734&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=643&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=461&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=738&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=721&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=742&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=736&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=521&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=526&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=360&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=753&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=620&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=759&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=432&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=635&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=111&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=611&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=723&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=421&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=525&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=732&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=743&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=659&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=737&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=416&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=622&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=151&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=649&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=619&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=523&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=308&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=670&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=311&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=644&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=724&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=747&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=813&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=154&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=711&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=782&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=671&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=331&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=342&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=415&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=442&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=116&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=704&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=636&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=327&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=679&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=434&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=362&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=542&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=612&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=811&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=322&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=531&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=524&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=765&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=628&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=713&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=778&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=640&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=617&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=725&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=703&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=424&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=436&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=371&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=533&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=733&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=664&model%5BSaleTypeFilter%5D%5BAuctionDateType%5D=All&model%5BConditionFilter%5D%5BMinOdometer%5D=&model%5BConditionFilter%5D%5BMaxOdometer%5D=&model%5BConditionFilter%5D%5BSelectedAirBags%5D=NoRestrictions&model%5BConditionFilter%5D%5BRunAndDrive%5D=false&model%5BConditionFilter%5D%5BStarts%5D=false&model%5BConditionFilter%5D%5BKeys%5D=false&model%5BConditionFilter%5D%5BStartsWithJump%5D=false&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=CO+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=FI+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=OT+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=TH+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=WA+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=AO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BI&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=CC&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=C+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=EL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=EB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=ED&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=XB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=F+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=HA&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=IB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=ME&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=N+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=R+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RP&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=OF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SD&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=S+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SU&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TH&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TD&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=U+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=UK&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=V+&model%5BAttributesFilter%5D%5BSelectedTransmission%5D=All&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=D++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=E++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=F++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=G++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=B++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=O++&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BG&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BK&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BY&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=CH&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=CR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=DB&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GY&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=LB&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=MR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=NV&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=OR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PW&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PK&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=RD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=SL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TN&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TQ&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=WH&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=YL&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=1++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=2++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=3++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=4++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=5++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=6++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=8++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=10+&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=12+&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=R++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=Z++&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=BOS&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=CLR&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=JNK&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=NRP&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=ORG&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=SAL&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=OTH&model%5BWhoCanBuyFilter%5D%5BWhoCanBuyType%5D=All&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=DEA+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=DIS+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=EXP+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=LBU+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=NAB+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=REB+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=SCR+++&currentPage=${page}&sortColumn=&sortAscending=true&saveSearchResults=false&pageSize=1&pagination=true`;

		this.sendRequest(url, 'POST', data).then(result => {
			let $ = cheerio.load(result);
			let url_array = [];
			let data = $(".list-item > ul > li > a");
			let img = $(".lazy");

			if(data.length === 0 && page === 1){
				console.log("AIIA ERROR! Parsing finish.");
				this.toLog('error', `Parser error. Auction - AIIA, Date - ${new Date()}`);
				return false;
			}else if(data[0].attribs.href === this.last_AIIA_value && page > 1){
				console.log('AIIA parsing finish!');
			}else{
				this.last_AIIA_value = data[0].attribs.href;
				for(let i = 0; i < data.length; i++){
					let url = data[i].attribs.href;
					if(url.indexOf("/Vehicle?itemID") !== -1){
						url_array.push({url: url, img: img[0].attribs['data-original']});
					}
				}

				for(let i = 0; i < url_array.length; i++){
					this.getAiiaVehicle(url_array[i], wave, isAuto);
				}

				setTimeout(() => {
					this.getFullAiiaList(++page, wave, isAuto);
				}, 3500);

			}
		}).catch(err => {
			console.log(err);
			this.getFullAiiaList(page, wave, isAuto);
		});
	}

	getAiiaVehicle(auction_obj, wave, isAuto){
		let that = this;
		let url = 'https://www.iaai.com/' + auction_obj.url;
		let log = console.log;
		let nolog = function() {};
		phantom.create([], { logger: { warn: log, debug: nolog, error: log } }).then(function(ph){
			ph.createPage().then(function(page){
				page.open(url).then(function(status){
				     
					page.on('onResourceRequested', true, function (requestData, networkRequest){
	     					
	     				var stop_req = ['data:image', 'adpushup.com', 'adlightning.com', 'cdn.spincar.com', 'udc-neb.kampyle.com', 'facebook.com', 'optanon.blob.core.windows.net', 'unpkg.com', 'facebook.net', 'vis.iaai.com/resizer', 'optimizely.com', 'googletagmanager.com', 'iaai.com/dist/js/pages', 'iaai.com/ACSiteHeader', 'nebula-cdn.kampyle.com', 'regioner.spincar.com', 'iaai.com/signalr/hubs', 'iaai.com/dist', 'spins.spincar.com', 'https://www.iaai.com/Images/GetJsonImageDimensions', 'iaai.com/bundles', 'iaai.com/vehicledetails', 'iaai.com/Scripts'];

						for(var i = 0; i < stop_req.length; i++){
							if(requestData.url.indexOf(stop_req[i]) !== -1){
							   	networkRequest.abort();
							   	return;
						    }
						}
					});

				   	setTimeout(function(){
					   	page.property('content').then(function(content){
					   		try{

					   		let car = {};
					     	let delta = 0;
					       	let $ = cheerio.load(content);
					       	let v_inf = $(".data-list.data-list--details > li");
					       	let v_header = $(".heading-2.heading-2-semi.mb-0");
					       	let img = `https://vis.iaai.com:443/resizer?imageKeys=${auction_obj.img.split('=')[1]}&width=845&height=633`;
				        	v_header = v_header[0].children[0].data.split(' ');

				        	car.mark = v_header[1];
				        	car.year = parseInt(v_header[0]);
				        	car.currency = 'USD';
				        	car.carImage = img;
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

				        	console.log(car.lot_num);
				        	that.setDataToDB(car, wave, 'AIIA');

				        	page.close().then(() => {
				        		ph.exit();
				        	});
							/*
					     	index++;
					     	if(index < url_array.length){
					     		that.getAiiaVehicle(page_с, url_array, index, isAuto);
					     	}else{
					     		console.log('DONE!');
					     		page_с++;
					     		if(isAuto) that.getFullAiiaList(page_с, isAuto);
					     	}
							*/
						}catch(e){
							console.log("ERROR");
							that.toLog('error', `Load page error. Auction - AIIA, Date - ${new Date()}`);
							ph.exit();
							that.getAiiaVehicle(auction_obj, wave, isAuto);
						}
				     	});
				    }, 2000);
			    }).catch(err => {
			    	console.log(err);
					that.toLog('error', `Load page error. Auction - AIIA, Date - ${new Date()}`);
					ph.exit();
					that.getAiiaVehicle(auction_obj, wave, isAuto);
			    });
			}).catch(err => {
			    console.log(err);
				that.toLog('error', `Load page error. Auction - AIIA, Date - ${new Date()}`);
				ph.exit();
				that.getAiiaVehicle(auction_obj, wave, isAuto);
			});
		}).catch(err => {
			console.log(err);
			that.toLog('error', `Load page error. Auction - AIIA, Date - ${new Date()}`);
			ph.exit();
			that.getAiiaVehicle(auction_obj, wave, isAuto);
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
				"${auction}")${delimiter}`;
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
			"${auction}");`;

			this.connection.query(query).then(result => {
				//console.log("DATA IN DB!");
			}).catch(err => {
				console.log(err);
			});
		}
	}
}

module.exports = Parser;