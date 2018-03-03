/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [1,2,3,4,9,9,10];

solve(input);

function solve(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (checkLarger(i, arr) >= 0) {
            console.log(i);
            return i;
        }
    }
}

function checkLarger(index, arr) {
    if (index === 0 && arr[index] > arr[index + 1]) {
        return index;
    } else if (index === arr.length - 1 && arr[index] > arr[index - 1]) {
        return index;
    } else if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return index;
    }
    return -1;
} 