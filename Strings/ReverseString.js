/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = ['string'];

function reverseString(stringArr) {
    let stringInput = stringArr[0],
        reversed = '',
        i, j;
    for (i = 0, j = stringInput.length - 1; i < stringInput.length; i++, j--) {
        reversed += stringInput[j];
    }
    return reversed;
}
console.log(reverseString(input));
