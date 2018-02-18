/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let a = parseFloat(args[0]) - 1,
        b = parseFloat(args[1]) - 1,
        c = (Math.sqrt(a * a + b * b)),
        x = parseFloat(args[0]),
        y = parseFloat(args[1]),
        isDotRect,
        isDotCircle;
    if (x <= 5 && x >= -1 && y <= 1 && y >= -1) {
        isDotRect = 'inside rectangle';
    } else {
        isDotRect = 'outside rectangle';
    }
    if (c <= 1.5) {
        isDotCircle = 'inside circle';
    } else {
        isDotCircle = 'outside circle';
    }
    return isDotCircle + ' ' + isDotRect;
}