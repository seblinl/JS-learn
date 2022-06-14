'use strict';

// Output even numbers in the loop
for (let i = 2; i <= 10; i++){
	if (i % 2) continue;
	
	alert(i);
}

// Replace "for" with "while"

let j = 0;

while (j < 3) alert(`number ${j++}!`);

// Repeat until the input is correct

while (true) {
	let inputNumber = prompt("Type in a number", "75");
	
	if (inputNumber > 100 || !inputNumber) {
		break;
	}
}

// Output prime numbers

let maxNum = +prompt("Input a max number", "10");

nextPrime: for (let i = 2; i <= maxNum; i++) {
	for (let k = 2; k < i; k++) {
		if (i % k === 0) {
			continue nextPrime;
		}
	}
	alert(i);
}
