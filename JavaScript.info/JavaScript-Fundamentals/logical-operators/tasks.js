'use strict';

// Check the range between

// if (age >= 14 && age <= 90)
	
// Check the range outside

// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)
	
// Check the login

let login = prompt("Your login type", "Admin");

if (login === "Admin") {
	let userPassword = prompt("Input your password", "TheMaster");

		if (userPassword === "TheMaster") {
			alert("Welcome!");
		} else if (userPassword === null || userPassword === "") {
			alert("Canceled");
		} else {
			alert("Wrong password");
		}
} else if (login === null || login === "") {
	alert("Canceled");
} else {
	alert("I don't know you");
}
