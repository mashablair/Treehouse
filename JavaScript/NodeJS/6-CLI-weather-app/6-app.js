const weather = require('./weather.js');

// Join multiple values passed as arguments and replace all spaces with underscores
//const query = process.argv.slice(2);
const query = process.argv.slice(2).join(' ');

// query: 90201
// query: Los Angeles
// query: Goleta_California
weather.get(query);

// HTTP Status Codes
// 200 - OK
// 301 -- Moved Permanently
// 500 -- Internal Server Error
// 404 -- Not Found
