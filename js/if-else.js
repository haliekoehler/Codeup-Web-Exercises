/**
 * Created by HKoehler on 11/4/16.
 */
'use strict'

// exercise 1 - if else

// var average =((70+80+95)/3);
//
// if (average >= 80){
//     console.log("You\'re awesome");
// }
//
// else {
//     console.log("You need more practice!")
// }
//
// var grade1 = 70;
// var grade2 = 80;
// var grade3 = 95;
//
// var numberOfGrades = 3;
//
// var sum = grade1 + grade2 + grade3;
//
// var average = sum / numberOfGrades;
//
// if (average >= 80)



//exercise 2 - if else

// var cameron = 180;
// var ryan = 250;
// var george = 320;

var Cameron = 'Cameron';
var Ryan = 'Ryan';
var George = 'George';

var camTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;

var discount = .2;
//
// var total = george;
//
// if (total > 200){
// total = total - (total * discount);
// }
//
// console.log("The total is") + total;
//
// var flipACoin = Math.floor(Math.random()* 2);
//
// if (flipACoin == 0) {
//     console.log('Buy a car!');
// } else if (flipACoin ==1) {
//     console.log('Buy a house!');
// } else {
//     console.log('Something went wrong!');
// }


//exercise 2 turned into a function


// function calculateHEBDiscount(shopperName, groceryTotal){
//     var appliedDiscount = groceryTotal * discount;
//     var withDiscount = groceryTotal - appliedDiscount;
//     return shopperName + '\'s total is ' + groceryTotal + ', they will pay ' + withDiscount + '.';
// }
//
// var newPrice = calculateHEBDiscount(Cameron, camTotal);
// console.log(newPrice);



//zach's version
//ex:'Zach\'s total is $225, he will pay $200 // if discount applied
// function getHEBDiscount(shopperName, groceryTotal, discountPercent){
//     var discountThershold = 200;
//     var total = groceryTotal;
//     var message = '';
//
//     // check if we apply the discount
//     if (groceryTotal > discountThershold){
//         total = groceryTotal - groceryTotal * discountPercent;
//     }
//
//     // zach's total was $, he will pay $
//     message = shopperName + ' total was $' + groceryTotal;
//     message += ' he will pay $' + total;
//
//     return message;
// }
//
// var name = prompt('Enter your name');
// var total = prompt('Enter your grocery total');
// total = parseInt(total);



function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
// will take in two strings, and randomly pick one of the two strings to return
function decideBetweenOptions(theFirstOption, theSecondOption){

    //generate random number, 1 or 0
    var rand = getRandomInt(0, 2);

    //based on our random number, decide which string to return
    if (rand){
        return theFirstOption;
    } else {
        return theSecondOption;
    }
}

var selectedOption = decideBetweenOptions('a different string', 'something else');
console.log(selectedOption);