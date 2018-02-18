/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let a = +(args[0]),
        b = +(args[1]),
        buf;
    if (a > b) {
        buf = a;
        a = b;
        b = buf;
    }
    return a + ' ' + b;
}