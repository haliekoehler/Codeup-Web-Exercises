'use strict';

var counter = 0;
var compArray = [];
// var interval;
var level = 0;
var tiles = $('.tile');
var active = true;
// var mode = normal;


// ------ AUDIO FILES
var themeSong = new Audio('audio/SouthParkThemeSong.mp3');
var stanSound = new Audio('audio/Stan_Dude.mp3');
var startSound = new Audio('audio/Kyle_OhGod.mp3');

// ----- START GAME
    function startGame() {
        compArray = [];
        level = 0;
        flashAll(0);
        startSound.play();
        $('#levelCnt').text(" " + ++level);
        // change game text
        $('#gameText').text('Watch for Simon\'s Selection!');
    } // end of startGame()


// ----- RANDOM NUMBER BETWEEN 0 - 3
    function randomNumber() {
        return Math.floor((Math.random() * 4));
    } // end of randomNumber()


// ----- FLASH TILE
    function flashTile(tile) {
        $("#" + tile).addClass("active");
        setTimeout(function() {
            $("#" + tile).removeClass("active");
        }, 250);
    } // end of flashTile


// ----- FLASH ALL TILES
    function flashAll(index) {
        if(tiles.length > index) {
            var tile = tiles[index];
            setTimeout(function() {
                flashTile($(tile).attr('id'));
                flashAll(++index);
            }, 50);
        }
    } // end of flashAll()


// ----- RANDOM TILE SELECTION
    function randomTile() {
        return tiles[randomNumber()];
    } // end of randomTile()


// ----- COMP. PLAY-BACK
function playBack(array) {
    var i = 0;
    var interval = setInterval(function(){
        var tile = array[i];
        flashTile(tile);
        i++;
        if (i >= array.length){
            clearInterval(interval);
        }
    }, 1000)
} // end of playBack()


// ----- COMPUTER SELECTION / BUILD
    function compBuild() {
        var tile = randomTile();
        compArray.push($(tile).attr('id'));
        // flashTile(tile);
        // console.log(compArray);
        playBack(compArray);
        userTurn();
    } // end of compBuild()

// ----- USER TURN
    function userTurn() {
        $('#gameText').text('YOUR TURN! REPEAT THE SEQUENCE FOR SIMON!');
        // activateBoard();

    } // end of userTurn()

    $('.tile').click(function () {
        var userInput = $(this).attr('id');
        flashTile('' + userInput+ '');
        if (userInput == compArray[counter]) {
            console.log(counter);
            console.log('match');
            counter += 1;
            console.log(compArray.length);
            if (counter == compArray.length) {
                console.log('Full Sequence Match!');
                counter = 0;
                setTimeout(function () {
                    newLevel();
                }, 500);
            }
        } else {
            endGame();
            console.log('Something Went Wrong');
        }
    });


// ----- NEW LEVEL
    function newLevel() {
        $("#gameText").text('Correct! Next Level!');
        ($('#levelCnt').text(" " + ++level));
        flashAll(0);
        compBuild();
    } // end of newLevel()


// ----- GAME OVER, GO HOME
    function endGame() {
        stanSound.play();
        alert('YOU LOOOOOOOOOOOOSE! TRY AGAIN!');

    } // end of endGame();





$(document).ready(function () {

    themeSong.play();

    $('#startBtn').click(function () {

        startGame();

        compBuild();

    });


}); // --- end of DOCUMENT.READY