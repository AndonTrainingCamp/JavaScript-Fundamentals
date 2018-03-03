/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [12,6,7,3,8,9,9];

solve(input);

function solve(arr) {
    let count = 0,
        i;
    for (i = 0; i < arr.length; i++) {
        if (checkLarger(i, arr)) { 
            count++;
        }
    }
    console.log(count);
}

function checkLarger(index, arr) {
    let result = 0;
    if (index === 0 && arr[index] > arr[index + 1]) {
        result = 1;
    } else if (index === arr.length - 1 && arr[index] > arr[index - 1]) {
        result = 1;
    } else if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        result = 1;
    }
    return result;
} 