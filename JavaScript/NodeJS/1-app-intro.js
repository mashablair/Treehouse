'use strict';
// open this directory in CLI and enter:
// $ node app.js
// we just ran JS outside the browser!!!

console.log('Hello world!');

// $ clear to clear 

console.error("opps, something happened");
console.dir({name: "Masha", age: 37});

// $ node
// this brings the console you can use just like DevTools console
// to exit the Node.js REPL (read-eval-print-loop): Ctrl C twice or type .exit

// Node Host Objects:
// http
// https
// fs
// url
// os (and much more)

// Node is non-blocking
// it responds to request while waiting for other responses
// it's fast and efficient

// API is objects and methods that you can use 
// Stability index: never use '0', but use '2' or '3'

// e.g. here is a https.get() method:
const https = require('https');
https.get('https://encrypted.google.com/', (res) => {
	console.log('statusCode', res.statusCode);
	console.log('headers:', res.headers);
	
	res.on('data', (d) => {
		process.stdout.write(d);
	});
}).on('error', (e) => {
	console.log(e);
});