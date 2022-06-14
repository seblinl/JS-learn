'use strict';
/*
// Array operations

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// Sum input numbers

function sumInput() {
	let numArr = [];
	let num;
	let sum = 0;

	while (num !== null && num !== "") {
		num = prompt("Add a value", "3");
		
		(isFinite(num)) ? numArr.push(num) : num = null;
	}
	
	for (let value of numArr) {
		sum += +value;
	}
	
	return sum;
}

alert( sumInput() );
*/
// A maximal subarray
// Slow
/*
function getMaxSubSum(arr) {
	let maxSum = arr[0];
	
	for (let i = 0; i < arr.length; i++) {
		let subSum = 0;
		for (let j = i; j < arr.length; j++) {
			subSum += arr[j];
			maxSum = Math.max(maxSum, subSum);
		}
	}
	
	let hasPositive = 0;
	for (let num of arr) {
		if (num >= 0) hasPositive++;
	}
	
	maxSum = (hasPositive > 0) ? maxSum : 0;
	
	return maxSum;
}*/
// Fast

function getMaxSubSum(arr) {
	let maxSum = 0;
	let subSum = 0;
	
	for (let num of arr) {
		subSum += num;
		maxSum = Math.max(maxSum, subSum);
		if (subSum < 0) subSum = 0;
	}
	
	return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2. -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );
