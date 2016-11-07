"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName = prompt('What is your name?');

while (userName === ""){
    userName = prompt('What is your name?');
}
    alert('Welcome, ' + userName + ' !');


// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.


var pizza = confirm('Do you like pizza, ' + userName + ' ?');

if (pizza) {
    alert('Cool! I like pizza too.');
} else {
    alert('Huh, well that\'s weird');
}
