/*jslint devel: true */
/*jslint es6 */
'use strict';

let input = 20;
solve(input);
function solve(args) {
    let arrNum = [],
        i;
    for (i = 0; i < args; i++) {
        arrNum[i] = i * 5;
    }
    console.log(arrNum.join(', '));
}

