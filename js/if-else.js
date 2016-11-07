/**
 * Created by HKoehler on 11/4/16.
 */
'use strict'

//exercise 1 - if else

// var average =((70+80+95)/3);
//
// if (average >= 80){
//     console.log("You\'re awesome");
// }
//
// else {
//     console.log("You need more practice!")
// }

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
//

//exercise 2 - if else

var cameron = 180;
var ryan = 250;
var george = 320;

var discount = .2;

var total = george;

if (total > 200){
total = total - (total * discount);
}

console.log("The total is") + total;

var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 0) {
    console.log('Buy a car!');
} else if (flipACoin ==1) {
    console.log('Buy a house!');
} else {
    console.log('Something went wrong!');
}


