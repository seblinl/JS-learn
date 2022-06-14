'use strict';

// Rewrite the function using "?" or "||"
/*
function checkAge(age) {
	// ?
	// return (age > 18) ? true : confirm("Did your parents allow you?");
	// ||
	return (age > 18) || confirm("Did your parents give permission?");
}
*/

// Function min(a, b)
/*
function min(a, b) {
	if (a > b) {
		return b;
	}
	
	return a;
	
	// ?
	// return (a > b) ? b : a;
}
*/

// Function pow(x, n)

function pow(x, n) {
	let sum = x;
	
	for (let i = 1; i < n; i++) {
		sum *= x;
	}
	
	return sum;
}

function getX() {
	return +prompt("Input x", "3");
}

function getN() {
	return +prompt("Input n", "2");
}

let x = getX();
let n = getN();

if (n > 0) {
	alert(pow(x, n));
} else {
	alert("Unsupported power, positive integer only");
}
