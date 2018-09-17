'use strict';
// https://teamtreehouse.com/mashablair.json
const https = require('https');
// Require http module for status codes
const http = require('http');

// Print Error Messages
function printError(error) {
	console.error(error.message);
}

function printMessage(username, badgecount, points) {
	const message = `${username}  has ${badgecount} total badge(s) and ${points} number of points in JavaScript.`;
	console.log(message);
}

function getProfile(username) {
	try {
		const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
			if (response.statusCode === 200) {
				let responseBody = "";
				// read the data 
				response.on('data', (dataChunk) => {
					responseBody += dataChunk.toString();
					//process.stdout.write(d);
				});

				response.on('end', () => {
					try {
						const profile = JSON.parse(responseBody);
						// print the data
						printMessage(profile.name, profile.badges.length, profile.points.total);
					} catch (error) {
						console.error(error.message);
						// or
						// printError(error);
					}
				});
			} else {
				const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`; // 'Not Found' instead of '404'
				const statusCodeError = new Error(message);
				printError(statusCodeError);
			}
		});

		request.on('error', (error) => {
			console.error(`Problem with request: ${error.message}`);
		});
	} catch (error) {
		console.error(error.message);
		// or
		// printError(error);
	}
}

module.exports.get = getProfile;