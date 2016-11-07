/**
 * Created by HKoehler on 11/4/16.
 */
// var luckyNumber = Math.floor(Math.random()* 6)


'use strict'


var luckyNumber = Math.floor(Math.random()* 6);
console.log(luckyNumber);

var total = 60;
var discountPercent;
var discount;

switch(luckyNumber) {
    case 1:
        discountPercent = 0.1;
        console.log('10%!');
        break;
    case 2:
        discountPercent = 0.25;
        console.log('25%!');
        break;
    case 4:
        discountPercent = 0.5;
        console.log('50%!');
        break;
    case 5:
        discountPercent = 1;
        console.log('100%!')
        break;
    default:
        discountPercent = 0;
        console.log('No Discount!');
}

// apply the discountPercent
discount = total - (total * discountPercent);

console.log('You will save ' + (total - discount));




var month = Math.floor(Math.random()* 13);
console.log(month);

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
}

