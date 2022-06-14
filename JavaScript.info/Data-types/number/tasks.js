'use strict';

// Sum numbers from the visitor

let a = parseInt(prompt("Value of a?", 7));
let b = parseInt(prompt("Value of b?", 5));

alert( a + b );

// Why 6.35.toFixed(1) == 6.3

alert( Math.round(6.35 * 10) / 10 );

// Repeat until the input is a number

function readNumber() {
	let num;
	
	do {
		num = prompt("Input a value", 75);
	} while (!isFinite(num));
	
	if (num === null || num === "") {
		return null;
	}
	
	return +num;
}

alert( `Number: ${readNumber()}` );

// A random number from min to max

function random(min, max) {
	return Math.random() * (max - min) + min;
}

alert( random(3, 14) );
alert( random(3, 14) );
alert( random(3, 14) );

// A random integer from min to max

function randomInteger(min, max) {
	return Math.trunc(Math.random() * max + min);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
