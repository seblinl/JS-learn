'use strict';

// Rewrite the "switch" inot an "if"
/*
if (browser === "Edge") {
	alert("You've got the Edge!");
} else if (browser === "Chrome" 
	|| browser === "Firefox" 
	|| browser === "Safari" 
	|| browser === "Opera") {
		alert("Okay we support these browsers too");
	} else {
		alert("We hope that this page looks ok!");
	}
*/

// Rewrite "if" into "switch"

let a = +prompt("a?", "0");

switch (a) {
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert("2,3");
		break;
}
