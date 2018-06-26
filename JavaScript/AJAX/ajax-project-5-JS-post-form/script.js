const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (event) {
    
	// TAKE BACK DEFAULT BEHAVIOURS FROM THE HTML FORM
    event.preventDefault();
    const url = form.getAttribute("action");

    // GATHER UP FORM DATA INTO A SINGLE QUERY STRING
    const formElements = document.querySelectorAll("form input, form textarea, form select");
    const arrayForString = [];

    for ( let i = 0; i < formElements.length; i += 1 ) {
        if ( formElements[i].hasAttribute("name") ) {
            const element = formElements[i];
            const name = element.getAttribute("name");
            const value = element.value;
            const nameValue = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            arrayForString.push(nameValue);
        }
    }

    const formData = arrayForString.join("&");

    // CREATE THE XHR REQUEST
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            document.querySelector("#signup").innerHTML = "<p>Thanks for signing up!</p>";
        }
    }

    xhr.open("POST", url);
    xhr.send(formData);

});