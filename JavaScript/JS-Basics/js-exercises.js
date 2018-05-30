//// JavaScript Document
//function executeCallback(callback) {
//	callback();
//}
//
//executeCallback(function() {
//	console.log("Say Goodbye!");
//});
//
//
////
//const surpriseSection = document.getElementById('surprise');
//
//const randomTime = Math.random() * 4000; 
//
//setTimeout( () => surpriseSection.textContent = 'Surprise!', randomTime);



//   function inside function 
const clockSection = document.getElementById('clock');

function getTime() {
	"use strict";
	
	function pad(number) {
		if (number < 10) {
			return "0" + number;
		} else {
			return number; 
		}
	}
	
	const now = new Date();
	
	const hh = pad(now.getHours());
	const mm = pad(now.getMinutes());
	const ss = pad(now.getSeconds());
	
	return `${hh}:${mm}:${ss}`;
}

function tickClock() {
	"use strict";
	clockSection.textContent = getTime();
}

setInterval(tickClock, 1000);