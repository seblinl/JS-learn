// Musketeers

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
    console.log('For: ' + musketeers[i]);
}

musketeers.push('D\'artagnan');

musketeers.forEach(musketeer => {
    console.log('ForEach: ' + musketeer);
});

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
    console.log('For...of: ' + musketeer);
}

// Sum of values & Array maximum

const values = [3, 11, 7, 2, 9, 10];
// Sum
let sum = 0;

for (const value of values) {
    sum += value;
}

console.log(sum);

// Maximum
let max = 0;

values.forEach(value => {
    if (value > max) {
        max = value;
    } 
});

console.log(max);

// List of words

const words = [];
let addWord = '';

while (addWord !== 'stop') {
    addWord = prompt('Add a word, stop exits.');
    words.push(addWord);
}

words.pop();

words.forEach(word => {
    console.log(word);
});