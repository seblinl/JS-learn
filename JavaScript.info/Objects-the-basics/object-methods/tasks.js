'use strict';

// Create a calculator

let calculator = {
	read() {
		this.a = +prompt("Value of a?", "7");
		this.b = +prompt("Value of b?", "5");
	},
	
	sum() {		
		return this.a + this.b;
	},
	
	mul() {		
		return this.a * this.b;
	}
};

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

// Chaining

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
		
	}
};

ladder
	.up()
	.up()
	.down()
	.showStep()
	.down()
	.showStep();
