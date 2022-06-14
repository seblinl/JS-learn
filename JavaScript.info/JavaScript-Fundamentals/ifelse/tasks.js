'use strict';

// The name of JavaScript

let guessName = prompt("What's the 'official' name of JavaScript?", "");

if (guessName == "ECMAScript") {
	alert("Right!");
} else {
	alert("You don't know? ECMAScript!");
}

// Show the sign

let inputNumber = +prompt("Input a number", "");

if (inputNumber > 0) {
	alert(1);
} else if (inputNumber < 0) {
	alert(-1);
} else {
	alert(0);
}

// Rewrite "if" into "?"

// let result = (a + b < 4) ? "Below" : "Over";

// Rewrite "if..else" into "?"

/*
let message = (login == "Employee") ? "Hello" :
	(login == "Director") ? "Greetings" :
	(login == "") ? "No login" :
	"";
*/
