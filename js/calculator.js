/**
 * Created by HKoehler on 11/16/16.
 */
(function(){
    "use strict";

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');
    var btn9 = document.getElementById('btn9');
    var btn0 = document.getElementById('btn0');
    var btnA = document.getElementById('btnA');
    var btnS = document.getElementById('btnS');
    var btnM = document.getElementById('btnM');
    var btnD = document.getElementById('btnD');
    var btnE = document.getElementById('btnE');
    var btnC = document.getElementById('btnC');

    btn1.addEventListener('click', addDigit);
    btn2.addEventListener('click', addDigit);
    btn3.addEventListener('click', addDigit);
    btnA.addEventListener('click', addOp);
    btn4.addEventListener('click', addDigit);
    btn5.addEventListener('click', addDigit);
    btn6.addEventListener('click', addDigit);
    btnS.addEventListener('click', addOp);
    btn7.addEventListener('click', addDigit);
    btn8.addEventListener('click', addDigit);
    btn9.addEventListener('click', addDigit);
    btnM.addEventListener('click', addOp);
    btnC.addEventListener('click', clear);
    btn0.addEventListener('click', addDigit);
    btnE.addEventListener('click', evaluate);
    btnD.addEventListener('click', addOp);



    function addDigit(){

        var centerField = document.getElementById('operator');

        if (centerField.value == '') {
            // target left input
            var leftField = document.getElementById('leftOp');

            // get button's value
            var val = document.getElementsByClassName('button').value;

            //start in the first input
            leftField.value += this.value;


        } else if (centerField.value != ''){
            var rightField = document.getElementById('rightOp');
            var val2 = document.getElementsByClassName('button').value;
            rightField.value += this.value;
        }
    }

    function addOp(){
        // target center input
        var centerField = document.getElementById('operator');

        //get buttons value
        var val = document.getElementsByClassName('button').value;

        //assign value to center input
        centerField.value = this.value;
        console.log(this.value);
    }

    // clear all fields
    function clear(){
        document.getElementById('leftOp').value = '';
        document.getElementById('operator').value = '';
        document.getElementById('rightOp').value = '';
    }


    //evaluate  equation and display result
    function evaluate(){
        var leftField = document.getElementById('leftOp');
        var num1 = document.getElementById('leftOp').value;
        var op = document.getElementById('operator').value;
        var num2 = document.getElementById('rightOp').value;

        // var sum = parseFloat(num1.value) + eval(op.value) + parseFloat(num2.value);

        var sum = eval(num1 + op + num2);

        document.getElementById('leftOp').value = '';
        document.getElementById('rightOp').value = '';

        return leftField.value = sum;
    }

}());