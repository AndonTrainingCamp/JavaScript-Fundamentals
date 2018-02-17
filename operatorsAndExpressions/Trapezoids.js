/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let a = +(args[0]),
        b = +(args[1]),
        h = +(args[2]);
    return (((a + b) / 2) * h).toFixed(7);
}
