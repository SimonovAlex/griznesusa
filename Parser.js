/*jshint esversion: 6 */
const axios = require('axios').default;
const cheerio = require("cheerio");
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
7) toLog - this method allow write logs to the certain file
PARAMETERS:
	type - type of logs
	text - text of logs
*/

class Parser{
	constructor(connection, fs){
		this.stopPage = 1;
		this.connection = connection;
		this.fs = fs;
	}

	sendRequest(url, method, data){
		return axios({
	    	method: method,
	    	url: url,
	    	headers: {'Content-Type': 'application/x-www-form-urlencoded',
	    	'Access-Control-Allow-Headers': 'x-access-token',
	    	'Cookie': 'IAAITrackingCookie=56ffe49f-407c-4d5f-8f88-cf109dcfc0c0; ASP.NET_SessionId=idarg1cujosl2zu05qmacszf; BIGipServerl_www.iaai.com_80_pool=rd20o00000000000000000000ffffac11f09co80; kampyle_userid=c195-dbc0-817f-233b-359d-fbf1-bb73-6df6; cd_user_id=170a73862c4207-0c1d3062ead4b8-4313f6b-140000-170a73862c526d; _ga=GA1.2.624101359.1583353472; OptanonAlertBoxClosed=2020-03-04T20:56:05.897Z; actualOptanonConsent=%2C1%2C2%2C4%2C101%2C102%2C103%2C104%2C; LAST_INVITATION_VIEW=1583355377640; DECLINED_DATE=1583355413463; PreviousSortAdvSearch=advancedsearch?url=2Q9M/jnrDcNFqzk77so6goeKFBjWeTl5n0fVq1reIUM=; optimizelyEndUserId=oeu1584553325050r0.975825947847613; PreviousSortSalesList=saleslist?url=d+W1cSsHGtpuDZLQpJZyEYAEZ3pbGDVdy1W9hbs5PDezF01bqCp8LZFirxYosqja; __RequestVerificationToken=BbtJmH1fID1Qz1mIHbVDEpb3oWdMNjh3PMndtnQdPmun8n1t9i8MJpN1Fc6EnhoDEn_l2wbtCu5cKoRRUJGR-gIJtHc1; .IAAIAUTH=ADD1AF37A0B3B4198AC8F5C81B98CE34DD57707F8129115272DCE3C51A475C90D3B63E776EA8C872545127E094EC184385ED6E3D521377B5FB69B4156EF57A4412A95FFF4DE206CE2F5C4B085B4A382B75FA6BEE66AC043708BE076A0C80594B104E254A; PreviousSortMyVehicles=myvehicles?url=MYu+mWxKQYq12ofoks/0p8Pxk7AUzKFqRfc2+VJIxNCKOULnyTWZjDrBSRF3pVtb; Locations_Cookie=Locations_Cookie=MapView; _gid=GA1.2.1814934542.1585766433; kampyleUserSession=1585766753298; kampyleUserSessionsCount=24; kampyleUserPercentile=83.25906039168369; AutionViewCookie=AutionViewAuctionTypeCookie=False; TS01d57f9f=017b04cfc73ce599b050faf9519c893977e7bea544e511bbcae6962a3491b641bed06cd1c7a20242caa805ab097d81c17cc5f0d43a5973b9f9fbe44b8a2c7d2e7c1c520b1815506cc84250efca981ea9416fa839e704f525123a6564d78e1074e02c1e075a63ce3883e9db7fffc415b64ee18ffc6041391df46c84d630fab4b4fcefa127fc83314511999ea8beefc921be938b2e37; TSPD_101=0870113e9dab2800e88b4b64d0b81094eca737feade653b3dd2a29ed90af2e90a0f3be81a0a0e28d4bfcb7d2a4eef4f3:; OptanonConsent=isIABGlobal=false&datestamp=Wed+Apr+01+2020+22%3A48%3A29+GMT%2B0300+(%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0%2C+%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=5.8.0&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C4%3A1%2C101%3A1%2C102%3A1%2C103%3A1%2C104%3A1&AwaitingReconsent=false; kampyleSessionPageCounter=16',
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
		console.log('Parsing Copart...');
		this.getFullCopartList(0, true);
	}

	getFullCopartList(page, isAuto){
		let url = `https://www.copart.com/public/lots/search?size=30000&page=${page}`;
		this.sendRequest(url, 'POST', '').then(result => {
			let results = result.data.results;
			if(results !== undefined){
				this.stopPage = Math.floor(results.totalElements / 30000);
				//console.log(results.content);
				// Data to DB
				this.setDataToDB(results.content, 'Copart'); 
				// Recursion while last page of copart > current page
				if(this.stopPage > page && isAuto){
					console.log(`Copart: ${page} page of ${this.stopPage}`);
					this.getFullCopartList(page + 1, true);
				}else{
					console.log('Parsing finish!');
				}

			}else{
				console.log('Parser error 500');
			}
		});
	}
	
	getFullAiiaList(page, isAuto){
		let url = `https://www.iaai.com/AdvancedSearch/GetSearchResults`;
		let data = `model%5BSegments%5D%5B%5D=cbATypeClassic&model%5BSegments%5D%5B%5D=cbATypeHighEnd&model%5BSegments%5D%5B%5D=cbATypeHybrid&model%5BSegments%5D%5B%5D=cbATypePickUp&model%5BSegments%5D%5B%5D=cbATypeSedan&model%5BSegments%5D%5B%5D=cbATypeSUV&model%5BSelectedType%5D=rbAMType&model%5BSelectedSalvagetypes%5D%5B%5D=1&model%5BYearFilter%5D%5BStartYear%5D=&model%5BYearFilter%5D%5BEndYear%5D=&model%5BLocationFilter%5D%5BLocationType%5D=All&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AK&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AZ&model%5BLocationFilter%5D%5BStates%5D%5B%5D=AR&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CO&model%5BLocationFilter%5D%5BStates%5D%5B%5D=CT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=DE&model%5BLocationFilter%5D%5BStates%5D%5B%5D=FL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=GA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=HI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ID&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IL&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=IA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=KS&model%5BLocationFilter%5D%5BStates%5D%5B%5D=KY&model%5BLocationFilter%5D%5BStates%5D%5B%5D=LA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ME&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MD&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MS&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MO&model%5BLocationFilter%5D%5BStates%5D%5B%5D=MT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NE&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NV&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NH&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NJ&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NM&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NY&model%5BLocationFilter%5D%5BStates%5D%5B%5D=NC&model%5BLocationFilter%5D%5BStates%5D%5B%5D=ND&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OH&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OK&model%5BLocationFilter%5D%5BStates%5D%5B%5D=OR&model%5BLocationFilter%5D%5BStates%5D%5B%5D=PA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=RI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=SC&model%5BLocationFilter%5D%5BStates%5D%5B%5D=SD&model%5BLocationFilter%5D%5BStates%5D%5B%5D=TN&model%5BLocationFilter%5D%5BStates%5D%5B%5D=TX&model%5BLocationFilter%5D%5BStates%5D%5B%5D=UT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=VT&model%5BLocationFilter%5D%5BStates%5D%5B%5D=VA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WA&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WV&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WI&model%5BLocationFilter%5D%5BStates%5D%5B%5D=WY&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=438&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=200&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=201&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=203&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=901&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=660&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=631&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=140&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=626&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=437&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=131&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=372&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=522&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=751&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=651&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=710&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=707&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=706&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=705&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=418&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=607&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=719&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=422&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=361&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=727&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=341&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=609&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=658&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=647&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=652&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=624&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=645&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=376&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=614&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=720&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=714&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=752&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=514&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=515&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=511&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=653&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=661&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=745&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=663&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=113&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=762&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=662&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=746&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=412&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=726&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=441&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=443&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=534&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=656&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=370&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=374&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=536&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=516&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=731&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=770&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=332&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=420&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=629&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=309&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=363&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=435&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=502&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=132&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=749&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=763&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=465&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=772&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=334&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=337&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=518&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=715&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=761&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=428&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=427&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=623&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=638&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=133&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=114&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=456&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=414&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=440&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=729&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=541&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=425&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=712&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=527&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=754&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=760&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=152&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=722&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=780&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=509&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=423&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=613&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=419&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=134&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=665&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=669&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=402&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=734&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=643&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=461&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=738&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=721&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=742&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=736&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=521&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=526&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=360&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=753&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=620&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=759&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=432&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=635&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=111&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=611&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=723&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=421&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=525&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=732&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=743&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=659&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=737&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=416&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=622&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=151&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=649&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=619&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=523&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=308&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=670&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=311&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=644&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=724&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=747&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=813&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=154&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=711&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=782&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=671&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=331&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=342&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=415&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=442&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=116&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=704&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=636&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=327&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=679&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=434&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=362&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=542&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=612&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=811&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=322&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=531&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=524&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=765&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=628&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=713&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=778&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=640&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=617&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=725&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=703&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=424&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=436&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=371&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=533&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=733&model%5BLocationFilter%5D%5BBranches%5D%5B%5D=664&model%5BSaleTypeFilter%5D%5BAuctionDateType%5D=All&model%5BConditionFilter%5D%5BMinOdometer%5D=&model%5BConditionFilter%5D%5BMaxOdometer%5D=&model%5BConditionFilter%5D%5BSelectedAirBags%5D=NoRestrictions&model%5BConditionFilter%5D%5BRunAndDrive%5D=false&model%5BConditionFilter%5D%5BStarts%5D=false&model%5BConditionFilter%5D%5BKeys%5D=false&model%5BConditionFilter%5D%5BStartsWithJump%5D=false&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=CO+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=FI+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=OT+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=TH+&model%5BConditionFilter%5D%5BLossTypes%5D%5B%5D=WA+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=AO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BI&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=CC&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=C+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=EL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=EB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=ED&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=XB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=FW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=F+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=HA&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=IB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=BS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=LS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=ME&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=N+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RL&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=R+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RP&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RR&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RS&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=RO&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=OF&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SW&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SD&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=S+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=SU&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TH&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TB&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=TD&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=U+&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=UK&model%5BConditionFilter%5D%5BDamages%5D%5B%5D=V+&model%5BAttributesFilter%5D%5BSelectedTransmission%5D=All&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=D++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=E++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=F++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=G++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=B++&model%5BAttributesFilter%5D%5BFuelTypes%5D%5B%5D=O++&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BG&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BK&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BY&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=CH&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=CR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=BD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=DB&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GY&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=GR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=LB&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=MR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=NV&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=OR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PW&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PK&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=PR&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=RD&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=SL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TN&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TL&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=TQ&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=WH&model%5BAttributesFilter%5D%5BColors%5D%5B%5D=YL&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=1++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=2++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=3++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=4++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=5++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=6++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=8++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=10+&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=12+&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=R++&model%5BAttributesFilter%5D%5BCylinders%5D%5B%5D=Z++&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=BOS&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=CLR&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=JNK&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=NRP&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=ORG&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=SAL&model%5BTitleTypeFilter%5D%5BTitleTypes%5D%5B%5D=OTH&model%5BWhoCanBuyFilter%5D%5BWhoCanBuyType%5D=All&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=DEA+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=DIS+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=EXP+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=LBU+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=NAB+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=REB+++&model%5BWhoCanBuyFilter%5D%5BLicenseTypes%5D%5B%5D=SCR+++&currentPage=${page}&sortColumn=&sortAscending=true&saveSearchResults=false&pageSize=100&pagination=true`;
		this.sendRequest(url, 'POST', data).then(result => {
			console.log(result);
			//let $ = cheerio.load(result);
			//console.log($);
			//let data = $("#hdnItemIdForWatch").html();
			//console.log(data);
		});
	}

	toLog(type, text){
		let log_name = null;
		if(type === 'query'){
			log_name = 'query_log.txt';
		}

		this.fs.appendFile(`logs/${log_name}`, text, function(err){
			if(err){
			    return console.log(err);
			}
		}); 
	}

	setDataToDB(data, auction){
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
				query += `(NULL, 2, ${lot.ln}, "${lot.mkn}", "${lot.lm}",
				${lot.lcy}, ${lot.la}, ${lot.orr}, "${lot.egn}", ${lot.cy},
				"${lot.cuc}", ${lot.hb}, "${lot.tims}", "${lot.tmtp}",
				"${lot.bstl}", "${lot.lcd}", "${lot.ft}", "${lot.ord}",
				"${auction}")${delimiter}`;
			}

			this.toLog('query', query);

			this.connection.query(query).then(result => {
				console.log("DATA IN DB!");
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