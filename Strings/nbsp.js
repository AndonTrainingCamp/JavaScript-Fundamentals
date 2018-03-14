/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = ['This text contains 4 spaces!!'];

function replaceNBSP(inputArr) {
    let text = inputArr[0];
    text = text.replace(/\s/g, '&nbsp;');
    return text;
}
console.log(replaceNBSP(input));