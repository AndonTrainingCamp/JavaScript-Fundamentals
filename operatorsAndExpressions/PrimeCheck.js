/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let num = +(args[0]),
        i;
    if (num <= 1) {
        return false;
    }
    for (i = 2; i < num; i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
}
