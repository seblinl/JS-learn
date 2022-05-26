// Improved hello
/*
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}.`;
    return message;
}

let firstName = prompt('What\'s your first name?');
let lastName = prompt('What\'s your last name?');

console.log(sayHello(firstName, lastName));
*/

// Number squaring
/*
function square1(x) {
    const square = x * x;
    return square;
}

const square2 = x => x * x;

for (let i = 0; i <= 10; i++) {
    console.log(square1(i));
    console.log(square2(i));
}
*/

// Minimum of two numbers
/*
function min(x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));
*/

// Calculator
/*
const calculate = function(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'You sure that\'s right?';
    }
}

console.log(calculate(4, '+', 6));
console.log(calculate(4, '-', 6));
console.log(calculate(2, '*', 0));
console.log(calculate(12, '/', 0));
*/

// Circumference and area of a circle

let radius = Number(prompt('Type in a radius value.'));

function circArea(radius) {
    const area = Math.PI * radius ** 2;
    return area;
}

const circumference = radius => 2 * Math.PI * radius;

console.log(`A circle with a radius of ${radius}m has an area of ${circArea(radius)}m2 and a circumference of ${circumference(radius)}m.`);