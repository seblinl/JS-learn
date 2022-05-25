// Carousel
/*
let turns = Number(prompt('Number of turns?'));

//while
let turn = 1;
while (turn <= turns) {
    console.log('Turn: ' + turn);
    turn++;
}

// For
for (let i = 1; i <= turns; i++) {
    console.log('Turn:' + i);
}
*/

// Parity
/*
let startNbr = Number(prompt('Input a starting number:'));

// For
for (let i = startNbr; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}

// While
while (startNbr <= 10) {
    if (startNbr % 2 === 0) {
        console.log(startNbr + ' is even.');
    } else {
        console.log(startNbr + ' is odd.');
    } 
    startNbr++;
}
*/

// Input Validation
/*
let number = Number(prompt('Input a number, between 50 and 100 exits.'))

// While
while ((number > 100) || (number < 50)) {
    console.log(`While: ${number}`);
    number = Number(prompt('Input a number, between 50 and 100 exits.'));
}

// For
for (let i = number; (i > 100) || (i < 50); i = number) {
    console.log(`For: ${i}`);
    number = Number(prompt('Input a number, between 50 and 100 exits.'));
}
*/

// Multiplication table
/*
let multiNbr = Number(prompt('Input a number to show it\'s multiplication table.'));

// For
for (let i = 1; i <= multiNbr; i++) {
    console.log(`For: ${i} x ${multiNbr} = ${i * multiNbr}`);
}

// While
let multiIt = 1;
while (multiIt <= multiNbr) {
    console.log(`While: ${multiIt} x ${multiNbr} = ${multiIt * multiNbr}`)
    multiIt++;
}
*/

// Neither yes or no
/*
let yesNo = prompt('Type something, yes or no exits.');

// While
while ((yesNo !== 'yes') && (yesNo !== 'no')) {
    yesNo = prompt('Keep typing.');
}

// For
for (yesNo; (yesNo !== 'yes') && (yesNo !== 'no'); yesNo) {
    yesNo = prompt('Keep typing.');
}
*/

// FizzBuzz

//For
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('For: FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('For: Fizz');
    } else if (i % 5 === 0) {
        console.log('For: Buzz');
    } else {
        console.log('For: ' + i);
    }
}

//while
let itNbr = 1;
while (itNbr <= 100) {
    if (itNbr % 3 === 0) {
        if (itNbr % 5 === 0) {
            console.log('While: FizzBuzz');
        } else {
        console.log('While: Fizz');
        }
    } else if ((itNbr % 5 === 0) && (itNbr % 3 !== 0)) {
        console.log('While: Buzz');
    } else {
        console.log('While: ' + itNbr);
    }
    itNbr++;
}