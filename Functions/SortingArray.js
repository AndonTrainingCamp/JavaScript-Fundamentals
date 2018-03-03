/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [10,9,2,4,1,0,-5,10];
let sortDesc = [];

solve(input);

function solve(arr) {
    let sortAsce = [],
        i,
        j;
    sortArr(arr);
    for (i = 0, j = sortDesc.length - 1; i < sortDesc.length; i++, j--) {
        sortAsce[i] = sortDesc[j];
    }
    console.log(sortAsce.join(' '));
}

function sortArr(arr) {
    let maxElmtIndex,
        buffer,
        i;
    for (i = 0; i < arr.length; i++) {
        sortDesc[i] = arr[i];
    }
    for (i = 0; i < sortDesc.length; i++) {
        maxElmtIndex = maxElmt(i, sortDesc);
        buffer = sortDesc[i];
        sortDesc[i] = sortDesc[maxElmtIndex];
        sortDesc[maxElmtIndex] = buffer;
    }
}

function maxElmt(startIndex, arr) {
    let max = sortDesc[startIndex],
        indexMax = startIndex;
    for (; startIndex < sortDesc.length; startIndex++) {
        if (sortDesc[startIndex] > max) {
            max = sortDesc[startIndex];
            indexMax = startIndex;
        }
    }
    return indexMax;
}