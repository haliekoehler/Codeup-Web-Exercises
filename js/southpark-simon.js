/**
 * Created by HKoehler on 12/15/16.
 */

'use strict';

var simonArray = [];
var counter = 0;
var level = 0;
var tiles = $('[data-tile]');
var active = true;

// --------------------------------------- AUDIO FILES
var themeSong = new Audio ('audio/southparkThemeEdit.mp3');
var startSound = new Audio ('audio/Kyle_OhGod.mp3');
var stanSound = new Audio ('audio/Stan_Dude.mp3');
var kyleSound = new Audio ('audio/Kyle_KickTheBaby.mp3');
var cartmanSound = new Audio ('audio/Cartman_Hippy.mp3');
var kennySound = new Audio ('audio/Kenny_Speaking.mp3');

// --------------------------------------- CLICK EVENTS

$('#stan').click(function(){
    stanSound.play();
});

$('#kyle').click(function(){
    kyleSound.play();
});

$('#cartman').click(function(){
   cartmanSound.play();
});

$('#kenny').click(function (){
   kennySound.play();
});

$('#startBtn').click(function(){
    startSound.play();
});

// --------------------------------------- FUNCTIONS

// ----- RANDOM NUMBER BETWEEN 0 - 3
    function randomNumber() {
        return Math.floor((Math.random() * 4));
    }

// ----- RANDOM TILE SELECTION
    function randomTile() {
    return tiles[randomNumber()];
}

// ----- ACTIVATE BOARD
    function activateBoard(){
        $(tiles).on('click', '[data-tile]');
    }

// ----- DEACTIVATE BOARD
    function deactivateBoard(){
        $(tiles).unbind('click', '[data-tile]');
    }

// ----- FLASH TILE
    function flashTile(tile) {
        $(tile).addClass("active");
        setTimeout(function() {
            $('[data-tile]').removeClass("active");
        }, 250);
    }

// ----- BUILD SIMON ARRAY
    function simonBuild () {
        // setTimeout(function(){
        // $('#gameText').html("SIMON\'S TURN" + "<br>" + "TURN!")
        //      }, 2000);
        deactivateBoard();
        var tile = randomTile();
        simonArray.push(tile);
        playback(simonArray);
        console.log(simonArray);
        userTurn();
    }

// ----- USER TURN
    function userTurn(){
        activateBoard();
        $('[data-tile]').click(function () {
            flashTile(this);
            if (this == simonArray[counter]) {
                console.log(counter);
                console.log('match');
                counter += 1;
                console.log(simonArray.length);
                if (counter == simonArray.length) {
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
        // $('#gameText').html("YOUR TURN!" + "<br>" + "REPEAT SIMON'S SEQUENCE!");
    }


// ----- PLAYBACK SIMON'S ARRAY
    function playback(array) {
        var i = 0;
        var interval = setInterval(function(){
            var tile = array[i];
            flashTile(tile);
            i++;
            if (i >= array.length){
                clearInterval(interval);
            }
        }, 1000)
    }

// ----- START GAME
    function startGame(mode){
        simonArray = [];
        level = 0;
        $('#levelCnt').text(" " + ++level);
        if (mode === "easy"){
            simonBuild();
        } else if (mode === "hard"){
            alert('HARD?!');
        } else if (mode === "weird"){
            alert('ARE YOU SURE YOU WANNA GET WEIRD?!');
        }
    }

// ----- END GAME
    function endGame(){
        alert('YOU LOSE');
    }


// ----- NEW LEVEL
function newLevel() {
    $("#gameText").text('CORRECT! NEXT LEVEL');
    ($('#levelCnt').text(" " + ++level));
    simonBuild();
}

$(document).ready(function () {

    themeSong.play();


    $('#startBtn').click(function(){

        var mode = $("option:selected").val();

        startGame(mode);
    })

}); // end of $(document).ready


