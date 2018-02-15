/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let digits;

    digits = args[0];
    if (digits.length >= 3) {
        if (+(digits[digits.length - 3]) === 7) {
            return 'true';
        } else {
            return 'false ' + digits[digits.length - 3];
        }
    } else {
        return 'false 0';
    }
}