(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['Kenny', 'Eric', 'Stan', 'Kyle'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("Length of the array: " + names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log("without a loop");
    console.log("1 " + names[0]);
    console.log("2 " + names[1]);
    console.log("3 " + names[2]);
    console.log("4 " + names[3]);


    // using for loop
    console.log("with a loop");

    for(var i = 0 ; i < names.length; i++){
        console.log("name " + (i+1) + " " + names[i] + " i " + i);
    }

    // using forEach loop
    console.log("With foreach loop")
    names.forEach( function(element, index, array){
        console.log("name " + (index + 1) + " " + element + " index" + index)
    })

})();
