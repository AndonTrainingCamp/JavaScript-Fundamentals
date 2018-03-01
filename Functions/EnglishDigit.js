/*jslint devel: true */
/*jslint es6 */
'use strict';

solve(1234567);

function solve(inputNum) {
    lastDigit(inputNum); 
}

function lastDigit(num) {
    let digit = ['zero','one','two','three','four','five','six','seven','eight','nine'],
        index = num % 10;
        console.log(digit[index]);
}