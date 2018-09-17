'use strict';
// https://teamtreehouse.com/mashablair.json
const https = require('https');

function printMessage(username, badgecount, points) {
	const message = `${username}  has ${badgecount} total badge(s) and ${points} number of points in JavaScript.`;
	console.log(message);
}

function getProfile(username) {

	const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
		let responseBody = "";
		// read the data 
		response.on('data', (dataChunk) => {
			responseBody += dataChunk.toString();
			//process.stdout.write(d);
		});

		response.on('end', () => {
			const profile = JSON.parse(responseBody);
			// print the data
			printMessage(profile.name, profile.badges.length, profile.points.total);
		});
	});
	
	request.on('error', (error) => {
		console.error(`Problem with request: ${error.message}`);
	});
}

// but if we want to simply do this:
// $ node app.js chalkers mashablair alenaholligan
// just like in JS global object is 'window'
// in Node global object is 'process'

// with 'process' we can access the current version of node and arguments passed in the CLI
// to remove the current version of node, we use .slice(2)
const users = process.argv.slice(2);

users.forEach(getProfile);


