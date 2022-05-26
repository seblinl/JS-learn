// Following day

let inputDay = prompt('Input a day to see which follows.');
switch (inputDay) {
    case 'monday':
        console.log('Tuesday')
        break;
    case 'tuesday':
        console.log('Wednesday');
        break;
    case 'wednesday':
        console.log('Thursday');
        break;
    case 'thursday':
        console.log('Friday');
        break;
    case 'friday':
        console.log('Saturday');
        break;
    case 'saturday':
        console.log('Sunday');
        break;
    case 'sunday':
        console.log('Monday');
        break;
    default:
        console.log('Such a day surely does not exist.');
}

// Number comparison

let number1 = Number(prompt('First number to compare:'));
let number2 = Number(prompt('Second number to compare:'));

if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}.`);
} else if (number1 < number2) {
    console.log(`${number1} is lesser than ${number2}.`);
} else {
    console.log(`${number1} is equal to ${number2}.`);
}

// Final Values

// 0 : 4 : 12
// 4 : 3 : 2
// 3 : 4 : 0
let nb1 = Number(prompt('Enter nb1:'));
let nb2 = Number(prompt('Enter nb2:'));
let nb3 = Number(prompt('Enter nb3:'));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 += nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log(nb1, nb2, nb3);

// Number of days in a month

let monthNbr = Number(prompt('Input the number of a month:'));

if (monthNbr === 2) {
    console.log('It has 28 days.');
} else if ((monthNbr > 12) || (monthNbr < 1)) {
    console.log('Keep it between 1 and 12, if you may.');
} else if ((monthNbr === 4) || (monthNbr === 6) || (monthNbr === 9) || (monthNbr === 11)) {
    console.log('It has 30 days.');
} else {
    console.log('It has 31 days.');
}

// Following second

let seconds = Number(prompt('Input seconds:'));
let minutes = Number(prompt('Input minutes:'));
let hours = Number(prompt('Input hours:'));

console.log(`Your time: ${hours}h${minutes}m${seconds}s.`);

// Seconds
if ((seconds > 60) || (seconds < 0)) {
    console.log('Not a valid second value.');
    seconds = 0;
} else if (seconds >= 59) {
    minutes++;
    seconds = 0;
} else {
    seconds++;
}

// Minutes
if ((minutes > 60) || (minutes < 0)) {
    console.log('Not a valid minute value.');
    minutes = 0;
} else if (minutes === 60) {
    hours++;
    minutes = 0;
}

//Hours
if ((hours > 24) || (hours < 0)) {
    console.log('Not a valid hour value.');
    hours = 0;
} else if (hours === 24) {
    hours = 0;
}

console.log(`One second later would be: ${hours}h${minutes}m${seconds}s.`);