/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let digits,
        digit;
    digits = args[0];
    if (digits.length >= 3) {
        digit = +(digits[digits.length - 3]);
        return digit === 7 ? 'true' : 'false ' + digit;
    } else {
        return 'false 0';
    }
}