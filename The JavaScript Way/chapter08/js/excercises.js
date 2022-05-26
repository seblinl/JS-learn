// Word info

const word = prompt('Type in a word:');

console.log(word.length);
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Vowel count
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];

for (const letter of word.toLowerCase()) {
    vowels.forEach(vowel => {
        if (vowel === letter) {
            vowelCount++;
        }
    });
}

console.log('Vowels: ' + vowelCount);

// Backwards word
let bwdWord = '';

for (let i = word.length-1; i >= 0; i--) {
    bwdWord += word[i];
}

console.log(bwdWord);

// Palindrome
const wordArr = Array.from(word.toLowerCase());
const bwdWordArr = Array.from(bwdWord.toLowerCase());

function removeSeparators(word) {
    const separators = [' ', '.', '-', ','];

    for (const letter of word) {
        separators.forEach(separator => {
            if (letter === separator) {
                word.splice(word.indexOf(letter), 1);
            }
        });
    }
}

removeSeparators(wordArr);
removeSeparators(bwdWordArr);

if (String(wordArr) === String(bwdWordArr)) {
    console.log('Its a palindrome');
} else {
    console.log('Its not a palindrome');
}