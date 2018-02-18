/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let biggest = +(args[0]);
    if (biggest < +(args[1])) {
        biggest = +(args[1]);
    }
    if (biggest < +(args[2])) {
        biggest = +(args[2]);
    }
    return biggest;
}