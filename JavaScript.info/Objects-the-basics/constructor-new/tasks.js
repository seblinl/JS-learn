'use strict';

// Create new Calculator

function Calculator() {
	this.read = function() {
		this.a = prompt("Value of a?", 7);
		this.b = prompt("Value of b?", 5);
	};
	
	this.sum = function() {
		return +this.a + +this.b;
	};
	
	this.mul = function() {
		return +this.a * +this.b;
	};
}

let calculator = new Calculator();

calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );

// Create new Accumulator

function Accumulator(startingValue = 75) {
	this.value = startingValue;
	
	this.read = function() {
		this.value += +prompt("Add n amount to value", 3);
		return this;
	};
}

let accumulator = new Accumulator(5);

accumulator
	.read()
	.read();

alert(accumulator.value);
