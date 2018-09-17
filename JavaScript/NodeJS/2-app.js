'use strict';
// Problem: We need a simple way to look at a user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile info to print out

// https://teamtreehouse.com/mashablair.json
const https = require('https');

// print message to console
function printMessage(username, badgecount, points) {
	const message = `${username}  has ${badgecount} total badge(s) and ${points} number of total points.`;
	console.log(message);
}

// and now we put all our https request inside this function so we can quickly reuse it for different usernames!
function getProfile(username) {

	// connect to API url
	// go to Node.js https documentation 
	const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
		let responseBody = "";
		// read the data 
		response.on('data', (dataChunk) => {
			// you need .toString() b/c otherwise it comes in chunks of numbers that keep coming b/c Node is non-blocking
			responseBody += dataChunk.toString();
			//process.stdout.write(d);
		});

		// but how do we know when data ends? 
		response.on('end', () => {
			// parse that JSON data
			// JSON is a native JS object -> available to Node too
			const profile = JSON.parse(responseBody);
			// print the data
			//console.dir(profile);
			//console.log(typeof profile); // --> string
			printMessage(profile.name, profile.badges.length, profile.points.total);

		});
	});
	
	request.on('error', (error) => {
		console.error(error.message);
	});

}

const users = ["chalkers", "alenaholligan", "mashablair", "davemcfarland"];

//users.forEach((username) => {
//	getProfile(username);
//});

// or even shorter!  since username is the only argument
users.forEach(getProfile);

// since JS is non-blocking, these results might not come back in the order we put them -- whatever is quicker to calculate will come back first
//getProfile("mashablair");
//getProfile("chalkers");
//getProfile("alenaholligan");





// Events: user events and system events
// e.g. timer is a system event:
//setTimeout( () => {
//	console.log("Timer finished!");
//}, 1000);



//const https = require('https');
//https.get('https://encrypted.google.com/', (res) => {
//	console.log('statusCode', res.statusCode);
//	console.log('headers:', res.headers);
//	
//	res.on('data', (d) => {
//		process.stdout.write(d);
//	});
//}).on('error', (e) => {
//	console.log(e);
//});