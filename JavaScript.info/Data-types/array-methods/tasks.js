'use strict';

// Translate border-left-width to borderLeftWidth
/*
function camelize(str) {
	let letterArr = str.split("");
	
	letterArr.forEach((item, index, array) => {
		if (item === "-") {
			array[index + 1] = array[index + 1].toUpperCase();
			array.splice(index, 1);
		}
	});
	
	let joinLetters = letterArr.join("");
		
	return joinLetters;
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );
*/

// Filter range
/*
let arr = [10, 2, 5, 7];

let filtered = filterRange(arr, 1, 8);

function filterRange(arr, a, b) {
	let arrCopy = arr.slice();
	
	return arrCopy
		.filter(item => item >= a && item <= b);
}

alert( filtered );

alert( arr );
*/

// Filter range "in place"
/*
let arr = [12, 5, 3, 8];

function filterRangeInPlace(arr, a, b) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (a >= arr[i] || b <= arr[i]) {
			arr.splice(i, 1);
		}
	}
}

filterRangeInPlace(arr, 4, 20);

alert( arr );
*/

// Sort in decreasing order
/*
let arr = [7, 4, 14, -10, 8];

arr.sort((a, b) => a - b).reverse();

alert( arr );
*/

// Copy and sort array
/*
let arr = ["HTML", "Python", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

function copySorted(arr) {
	let arrCopy = arr.slice();
	
	return arrCopy.sort();
}
*/

// Create an extendable calculator
/*
let calc = new Calculator;

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert( calc.calculate("3 + 7") );

alert( powerCalc.calculate("4 * 2") );

function Calculator() {
	this.methods = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b
	};
	
	this.calculate = function(str) {
		let mathStr = str.split(" "),
			a = +mathStr[0],
			op = mathStr[1],
			b = +mathStr[2];
		
		
		return this.methods[op](a, b);
	};
	
	this.addMethod = function(name, func) {
		this.methods[name] = func;
	};
}
*/

// Map to names
/*
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

let names = users.map(user => user.name);

alert( names );
*/

// Map to objects
/*
let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[2].fullName );
*/

// Sort users by age
/*
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [pete, john, mary];

sortByAge(arr);
arr.forEach(user => alert(user.name));

function sortByAge(users) {
	users.sort((a, b) => a.age - b.age);
}
*/

// Shuffle an array
/*
let arr = [1, 2, 3];

shuffle(arr);

alert(arr);

shuffle(arr);

alert(arr);

function shuffle(array) {
	for (let i = array.length-1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		
		[array[i], array[j]] = [array[j], array[i]];
	}
}
*/

// Get average age
/*
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

alert( getAverageAge(arr) );

function getAverageAge(users) {
	let sumAge = 0;
	
	users.forEach(user => sumAge += user.age);
	
	return (sumAge / users.length).toFixed(1);
}
*/

// Filter unique array members
/*
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( unique(strings) );

function unique(arr) {
	let uniqueArr = [];
	
	arr.forEach(item => {
		if (!uniqueArr.includes(item)) uniqueArr.push(item);
	});
	
	return uniqueArr;
}
*/

// Create keyed object from array

let users = [
	{id: "john", name: "John Smith", age: 20},
	{id: "mary", name: "Mary Smith", age: 24},
	{id: "pete", name: "Pete Peterson", age: 31}
];

let usersById = groupById(users);

alert(usersById["mary"].name);

function groupById(arr) {
	return arr.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {});
}
