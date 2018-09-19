const https = require('https');
// api key 7748a7fff81bb390d32527c29f173817

function printMessage(weather) {
  const message = `Current temperature in ${weather.name} is ${weather.weather[0].description} with temperature ${weather.main.temp}F`;
  console.log(message);
}

function getWeather(city) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=7748a7fff81bb390d32527c29f173817`, (response) => {
		let responseBody = "";
		// read data
		response.on('data', (data) => {
			responseBody += data;
			// process.stdout.write(data);
			//console.log(responseBody);
			//console.log(typeof responseBody); // string
			//console.log('statusCode', response.statusCode);
			//console.log('headers:', response.headers);
		});

		// parse response
		response.on('end', () => {
			const weather = JSON.parse(responseBody);
			//console.dir(weather);
			printMessage(weather);
		});
	});

	request.on('error', (error) => {
		console.log(error.message);
	});
}

// const cities = ["Goleta", "Chicago", "Santa Barbara", "London"];

// or you can type in in Terminal like this
// $ node app.js "Goleta" "Santa Barbara" "Los Angeles"
const cities = process.argv.slice(2);

cities.forEach((city) => {
	getWeather(city);
});
