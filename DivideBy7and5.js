/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let num = +(args[0]);
    if (num % 5 === 0 && num % 7 === 0) {
        return 'true ' + num;
    } else {
        return 'false ' + num;
    }
}
