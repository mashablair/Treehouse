$(document).ready(function () {
  "use strict";
	// for some reason relative url doesn't work in MAMP...
	// it's looking for 'http://localhost:8888/data/employees.json'
	// so I'll use absolute url
//	var url = "../data/employees.json"; 
	var url = "http://localhost:8888/ajax-project-4-jQuery/data/employees.json";
  $.getJSON(url, function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data, function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end getJSON
}); // end ready