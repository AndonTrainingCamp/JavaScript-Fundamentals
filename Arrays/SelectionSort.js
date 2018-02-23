/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputArr = [10, 1, 0, -4, 8, -3, 5];
solve(inputArr);

function solve(args) {
    let minNum = args[0],
        lastIndex, check = 0,
        j,i;
    for (j = 0; j < args.length - 1; j++) {
        for (i = j; i < args.length; i++) {
            if (args[i] < minNum) {
                minNum = args[i];
                lastIndex = i;
                check++;
            }
        }
        if (check != 0) {
            args[lastIndex] = args[j];
        }
        args[j] = minNum;
        minNum = args[j+1];
        check = 0;
        console.log(args[j]);
    }
    console.log(args[args.length-1]);
}
