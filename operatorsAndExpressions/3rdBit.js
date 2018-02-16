/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let num = parseInt(args[0]),
        bin = num & 8;
    return bin != 0 ? 1 : 0;
}