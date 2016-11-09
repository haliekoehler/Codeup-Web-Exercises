"use strict";

var num1;
var num2;
var result = 0;

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function mult(a, b){
    return a * b;
}


var operation = prompt('Choose one of the following operations:' + '\n' + 'add, subtract, divide, multiply');
var num1 = parseFloat(prompt('First number:'));
var num2 = parseFloat(prompt('Second number:'));

if (operation ==="add"){
        add(num1, num2);
        result = add(num1, num2);
    } else if (operation === "subtract"){
        sub(num1, num2);
        result = sub(num1, num2);
    } else if (operation === "divide"){
        divide(num1, num2);
        result = divide(num1, num2);
    } else if (operation === "multiply") {
        mult(num1, num2);
        result = mult(num1, num2);
    } else {
        alert("Invalid");
    }

console.log("Your answer is: " + result);
