// ajax to populate the employee list
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
	"use strict";
	if (request.readyState === 4) {
		if (request.status === 200) {
			var employees = JSON.parse(request.responseText);
			var statusHTML = '<ul class="bulleted">';
			for (var i=0; i<employees.length; i++) {
				if(employees[i].inoffice === true) {
					statusHTML += '<li class="in">';
				} else {
					statusHTML += '<li class="out">';
				}
				statusHTML += employees[i].name;
				statusHTML += '</li>';
			}
			statusHTML += '</ul>';
			document.getElementById('employeeList').innerHTML = statusHTML;
		} else {
			console.log("failed ajax for employee list");
		}
	}
};
	
request.open('GET', 'data/employees.json');
//request.responseType = 'json'; // with this, .responseText will not work 
request.send();




// ajax to populate the rooms list
var requestRooms = new XMLHttpRequest();
requestRooms.onreadystatechange = function() {
	"use strict";
	if (requestRooms.readyState === 4) {
		if (requestRooms.status === 200) {
			var rooms = JSON.parse(requestRooms.responseText);
			var statusHTML = '<ul class="rooms">';
			for (var i=0; i<rooms.length; i++) {
				if(rooms[i].available === true) {
					statusHTML += '<li class="empty">';
				} else {
					statusHTML += '<li class="full">';
				}
				statusHTML += rooms[i].room;
				statusHTML += '</li>';
			}
			statusHTML += '</ul>';
			document.getElementById('roomList').innerHTML = statusHTML;
		} else {
			console.log("failed ajax for room list");
		}
	}
};
	
requestRooms.open('GET', 'data/rooms.json');
requestRooms.send();