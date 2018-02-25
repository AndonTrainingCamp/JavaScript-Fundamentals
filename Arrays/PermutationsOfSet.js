/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputNum = 5;
solve(inputNum);

function solve(num) {
    let arrNums = [],
        line = [],
        numFact = calcFactorial(num),
        i, j, k, m;
    for (i = 0; i < num; i++) {             //Initialize an array with n sorted numbers with copy in line
        arrNums[i] = i + 1;
        line[i] = arrNums[i];
    }
    for (j = 0; j < numFact / (num - 1); j++) {         //Permutation algorithm
        for (k = 0; k < num - 1; k++) {
            line[k] = arrNums[k + 1];
            line[k + 1] = arrNums[k];
            console.log('{', line.join(', '), '}');     //Shows a combination 
                for (m = 0; m < num; m++) {
                    arrNums[m] = line[m];
                }
        }
    }
}

function calcFactorial (n) {
    let result = n,
        i;
    for (i = 1; i < n; i++) {
        result = result * (n - i); 
    }
    return result;
}
