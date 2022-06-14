'use strict';

// A simple page

let name = prompt("Type in a name", "JohnDoe");
let realNameConfirmation = confirm("Is it your real name?");

alert(`Your supplied the name: ${name}. It's a ${realNameConfirmation} name.`);
