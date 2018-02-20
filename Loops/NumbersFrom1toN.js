/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    const num = +(args[0]);
    let numArr = [],
        numLine,
        i;
    for (i = 0; i < num; i++) {
        numArr[i] = (i + 1);
    }
    numLine = numArr.join(' ');
    return numLine;
}
