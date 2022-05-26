// Improved hello
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');

alert(`Hello, ${firstName} ${lastName}. How do you do?`);

// Final values
// 2, 10, 102, 30, 40, 10, 10
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// VAT calculation
let exVat = Number(prompt('Input price to add VAT'));
let vatMultiplier = 1.206;

alert(`Price, VAT included: ${exVat * vatMultiplier}`);

// From Celsius to Fahrenheit degrees
let celsiusDeg = Number(prompt('Input centigrade'));
let fahrenheitDeg = celsiusDeg * (9/5) + 32;

alert(`That's ${fahrenheitDeg} in Fahrenheit.`);

// Variable swapping
let number1 = 5;
let number2 = 3;

let store1 = number1;
let store2 = number2;

number1 = store2;
number2 = store1;

console.log(number1);
console.log(number2);