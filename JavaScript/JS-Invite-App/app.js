'use strict';

// add names below

var form = document.getElementById("registrar");
var input = form.querySelector('input'); 
var mainDiv = document.querySelector('.main');
var ul = document.getElementById("invitedList");

// create dynamic checkmark for filter
var div = document.createElement('div');
var filterLabel = document.createElement('label');
var filterCheckbox = document.createElement('input');

filterLabel.textContent = 'Hide those who have NOT responded';
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

// to filter people who confirmed 
filterCheckbox.addEventListener('change', function(e) {
	var isChecked = e.target.checked;
	var lis = ul.children;
		
	// if li has a checkbox that is checked

	if (isChecked) {
		for (var i = 0; i<lis.length; i++) {
			var li = lis[i];
			if (li.className === 'responded') {
				li.style.display = '';
			} else {
				li.style.display = 'none';
			}
		}
	} else {
		for (var i = 0; i<lis.length; i++) {
			var li = lis[i];
			li.style.display = '';
		}
	}
	

});


// helper function to create <li>'s
function createLi(text) {
	//create li
	var li = document.createElement("li");
	var span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	var label = document.createElement('label');
	label.textContent = 'Confirmed';
	
	// add checkbox
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	
	// add edit button
	var editButton = document.createElement('button');
	editButton.textContent = 'edit';
	li.appendChild(editButton);
	
	// add edit button
	var removeButton = document.createElement('button');
	removeButton.textContent = 'delete';
	li.appendChild(removeButton);
	
	return li;
	
}


// to add a person to invite
form.addEventListener('submit', function(e) {
	
	e.preventDefault();
	var text = input.value;
	input.value = '';
	
	var li = createLi(text);
	
	ul.appendChild(li);
	
});


// when checkmark is checked
ul.addEventListener('change', function(e) {
	var checkbox = e.target;
	var checked = checkbox.checked;
	var li = checkbox.parentNode.parentNode;
	if (checked) {
		li.className = 'responded';
	} else {
		li.className = '';
	}
});

// delete button
ul.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		var button = e.target;
		var li = button.parentNode;
		var ul = li.parentNode;
		
		if (button.textContent === 'delete') {
			ul.removeChild(li);
		} else if (button.textContent === 'edit') {
			var span = li.firstElementChild;
			var input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;
			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'save';
		} else if (button.textContent === 'save') {
			var input = li.firstElementChild;
			var span = document.createElement('span');
			span.textContent = input.value;
			li.insertBefore(span, input);
			li.removeChild(input);
			button.textContent = 'edit';	
		}
	}
});

