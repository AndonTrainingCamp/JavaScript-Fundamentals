/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputArr = ['m','a','j','o','r'];
let inputArr2 = ['m','a','y','o','r'];

solve(inputArr, inputArr2);

function solve(arr, arr2) {
    if (arr.length != arr2.length){
        console.log('Diffirent lengths');
        return 0;
    }
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            console.log( 'Not equal! At array index[' + i + ']: ' +  arr[i] + ' != ' + arr2[i]);
            if (arr[i] < arr2[i]) {
                console.log(arr.join(''), 'is lexicographicaly less than', arr2.join(''));
                return -1;
            } else {
                console.log(arr.join(''), 'is lexicographicaly greater than', arr2.join(''));
                return 1;
            }
        }
    }
    console.log(inputArr.join(''), '=', inputArr2.join(''), 'Equal!');
    return 2;
}