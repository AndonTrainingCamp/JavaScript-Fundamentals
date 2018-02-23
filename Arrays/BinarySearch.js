/*jslint devel: true */
/*jslint es6 */
'use strict';
let inputNum = 9;
let inputArr = ['1', '2', '4', '8', '16', '31', '32', '64', '77', '99'];
//               0    1    2    3     4     5     6     7     8     9
solve(inputNum, inputArr);

function solve(num, arr) {
    let start = 0,
        end = arr.length - 1,
        prevIndex,
        index = Math.floor((end - start) / 2);
    while (num != +(arr[index])) {
        if (prevIndex == index) {
            console.log('-1');
            return;
        }
        if (num > +(arr[index])) {
            prevIndex = index;
            start = index + 1;
            index = Math.floor((end - start) / 2) + start;
        } else if (num < +(arr[index])) {
            prevIndex = index;
            end = index - 1;
            index = Math.floor((end - start) / 2);
        }
    }
    console.log(index);
}
