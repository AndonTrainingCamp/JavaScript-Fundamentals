/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputArr = [1, 2, 3, 4, 0, 0, 0, 1, 2, 3, 1, 2, 3, 4, 5];

solve(inputArr);

function solve(args) {
    let lastIndex,                                      //Index of the last element of the maximal increasing sequance.
        maxLength = 0,
        currentLength = 0,
        i,
        j;
    for (i = 0, j = 1; j < args.length; i++, j++) {
        if (args[i] === args[j] - 1) {
            currentLength++;
            if (j === args.length - 1 && currentLength > maxLength) {
                maxLength = currentLength;
                lastIndex = j;
            }
        } else if (currentLength != 0) {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                lastIndex = i;
            }
            currentLength = 0;
        }
    }
    let sequence = [];
    for (i = lastIndex - maxLength, j = 0; i <= lastIndex; i++, j++) {
        sequence[j] = args [i];
    }
    console.log(sequence.join(' '));
}