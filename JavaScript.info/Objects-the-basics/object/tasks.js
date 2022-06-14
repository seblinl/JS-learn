'use strict';

// Hello, object

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	
	return true;
}

// Sum object properties

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let sum = sumSalaries(salaries);

alert(sum);

function sumSalaries(obj) {
	let total = 0;
	
	for (let salary in obj) {
		total += obj[salary];
	}
	
	return total;
}

// Multiply numeric property value by 2

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
}

multiplyNumeric(menu);

for (let key in menu) {
	alert(key + ": " + menu[key]);
}

function multiplyNumeric(obj) {
	for (let key in obj) {
		if ((typeof obj[key]) === "number") {
			obj[key] *= 2;
		}
	}
}
