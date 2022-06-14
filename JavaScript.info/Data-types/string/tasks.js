'use strict';

// Uppercase the first character

function ucFirst(str) {
	if (!str) return str;
	
	return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") );

// Check for spam

function checkSpam(str) {
	return (str.toLowerCase().includes("viagra") 
		|| str.toUpperCase().includes("XXX")
		);
}

alert( checkSpam("buy ViAgRA now") );
alert( checkSpam("free xxx") );
alert( checkSpam("innocent rabbit") );

// Truncate the text

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + "\u2026";
	}
	
	return str;
}

alert( truncate("What I'd like to tell on this topic is:", 20) );
alert( truncate("Hi everyone!", 20) );

// Extract the money

function extractCurrencyValue(str) {
	return (str.startsWith("$")) ? +str.slice(1) : "No casherino";
}

alert( extractCurrencyValue("$120") );
alert( extractCurrencyValue("Absolute zero") );
