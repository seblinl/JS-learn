// Circles again
const circles = require("./circles");
const r = 4;
console.log(`The circumference of a circle with a radius of ${r} is ${circles.circumference(r)}.
It's area is ${circles.area(r)}.`);

// Accounting
const Account = require("./accounting.js");

const myAccount = new Account("Sebbe");

myAccount.credit(150);

console.log(myAccount.describe());

// Playing with dates
const moment = require("moment");

const then = moment([1976, 11, 26]);
const now = moment();

console.log(moment().format("dddd, MMMM Do YYYY"));
console.log(then.from(now));