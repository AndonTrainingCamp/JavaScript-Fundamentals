/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let digits,
        digit;

    digits = args[0].split('');
    if (digits.length >= 3) {
        digit = +(digits[digits.length - 3]);
        if (digit === 7) {
            return 'true';
        } else {
            return 'false ' + digit;
        }
    } else {
        return 'false ' + 0;
    }
}