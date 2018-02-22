/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputArr = [9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 1, 1, 1, 1, 1];

solve(inputArr);

function solve(args) {
    let lastIndex,                                      //Index of the last element of the maximal equal sequance.
        maxLength = 0,
        currentLength = 0,
        i,
        j;
    for (i = 0, j = 1; j < args.length; i++, j++) {
        if (args[i] === args[j]) {
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
