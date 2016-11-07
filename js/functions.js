"use strict";

var myNameIs = 'Halie'; // TODO: Fill in your name here.
var yourNameIs = 'Pierre';

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

function sayHello(name){
    console.log('Hello from ' + name);
}

sayHello(myNameIs);

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

var random = Math.floor((Math.random()*100)+1);

function isOdd(num){
    console.log(num);
    (num % 2 == 0) ? console.log('Even number!') : console.log('Odd number!');
}

isOdd(random);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
