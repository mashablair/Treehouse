const profile = require('./profile.js');

const users = process.argv.slice(2);
users.forEach(profile.get);

// HTTP Status Codes
// 200 - OK
// 301 -- Moved Permanently
// 500 -- Internal Server Error
// 404 -- Not Found
