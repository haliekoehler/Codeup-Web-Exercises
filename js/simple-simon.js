'use strict';


var compArray = [];
// var userArray = [];
var level = 0;
var tiles = $('.tile');
var active = true;
// var mode = normal;



// ----- BUTTON CLICK EVENTS

    // $('#startBtn').click(function () {
    //     startGame();
    //     console.log('Start Button works!')
    // });


    // PROB DON'T NEED BUT NOT DELETING YET ~~~~~~~~~~~~~~~~~~~~~~~~~
    // $('.tile').click(function () {
    //     flashTile(this);
    //     return this
    // });

    // $('#randomTest').click(function () {
    //     var tile = randomTile();
    //     compArray.push($(tile).attr('id'));
    //     flashTile(tile);
    //     console.log(compArray);
    // });

// ----- START GAME
    function startGame() {
        compArray = [];
        // userArray = [];
        level = 0;
        flashAll(0);
        function flashAll(index) {
            if(tiles.length > index) {
                setTimeout(function() {
                    flashTile(tiles[index]);
                    flashAll(++index);
                }, 50);
            }
        }
        $('#levelCnt').text(" " + ++level);
        // change game text
        $('#gameText').text('Watch for Simon\'s Selection!');}


// ----- RANDOM NUMBER BETWEEN 0 - 3
    function randomNumber() {
        return Math.floor((Math.random() * 4));
    }

// ----- FLASH TILE
    function flashTile(tile) {
        $(tile).fadeOut(50).fadeIn(100);
    }

// ----- RANDOM TILE SELECTION
    function randomTile() {
        return tiles[randomNumber()];
    }

// ----- COMPUTER SELECTION / BUILD
    function compBuild() {
        var tile = randomTile();
        compArray.push($(tile).attr('id'));
        flashTile(tile);
        console.log(compArray);
    }

// ----- COMP. PLAY-BACK
    function playBack() {
        compArray.forEach(function (element) {
            flashTile(element)
        })
    }

// // ----- USER SELECTION / BUILD
//     function userBuild(tile) {
//         userArray.push($(tile).attr('id'));
//         flashTile(tile);
//         console.log(userArray);
//     }

// ----- USER TURN
    function userTurn() {
        $('#gameText').text('Your Turn! Repeat the sequence for Simon!');

        activateBoard();
        console.log(compArray);

        $('.tile').click(function () {
            flashTile(this);
            var userInput = [$(this).attr('id').toString()];
            console.log(userInput);
            compare(userInput);

            // console.log('User Array: ' + userArray);

            // return userArray


        });
    }

// ----- COMPARE
    function compare(object) {
        if (object === compArray) {
            console.log('match');
            // newLevel();
        } else {
            console.log(compArray);
            console.log('Something Went wrong');
        }
    }

// ----- NEW LEVEL
    function newLevel() {
        alert('Correct! Next Level!');
        $('#levelCnt').text(" " + ++level);

    }

// ----- ACTIVATE BOARD FOR USER TURN
    function activateBoard() {
        active = true;
        $('.tile').on('click');
        console.log('Board is now Activated')
    }

// ----- DEACTIVATE BOARD FOR COMPUTER TURN
    function deactivateBoard() {
        active = false;
        $('.tile').off('click');
        console.log('Board not-active');
    }

// ----- GAME OVER, GO HOME
    function endGame() {
        alert('WRONG!');

    }





$(document).ready(function () {

    $('#startBtn').click(function () {

        startGame();

        deactivateBoard();

        setTimeout(compBuild, 2000);

        setTimeout(userTurn, 3000);

    });


}); // --- end of DOCUMENT.READY