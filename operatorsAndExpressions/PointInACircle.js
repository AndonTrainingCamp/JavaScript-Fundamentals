/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = (Math.sqrt(a * a + b * b)).toFixed(2);
    return c <= 2 ? 'yes ' + c : 'no ' + c;
}