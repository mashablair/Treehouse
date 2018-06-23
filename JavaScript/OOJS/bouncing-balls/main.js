// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var heigh = canvas.heigh = window.innerHeight;

// function to generate random number
function random(min, max) {
	var num = Math.floor(Math.random() * (max-min)) + min;
	return num;
}