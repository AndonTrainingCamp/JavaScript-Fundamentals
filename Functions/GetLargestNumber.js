/*jslint devel: true */
/*jslint es6 */
'use strict';

solve(10,5,4);

function solve(input1, input2, input3) {
    console.log(getMax(input1,input2) > input3 ? getMax(input1,input2) : input3);
}

function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}