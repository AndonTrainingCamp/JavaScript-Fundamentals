/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputArr = ['m','a','j','o','r'];
let inputArr2 = ['m','a','y','o','r'];

solve(inputArr, inputArr2);

function solve(arr, arr2) {
    if (arr.length < arr2.length){
        console.log('<');
        return;
    } else if (arr.length > arr2.length){
        console.log('>');
        return;
    }
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            console.log( 'Not equal! At array index[' + i + ']: ' +  arr[i] + ' != ' + arr2[i]);
            if (arr[i] < arr2[i]) {
                console.log('<');
            } else {
                console.log('>');
            }
        }
    }
    console.log('=');
}
