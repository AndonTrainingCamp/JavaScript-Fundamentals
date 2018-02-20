/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let hexNum = args[0],
        hexArr = '0123456789ABCDEF',
        maxPower = hexNum.length - 1,
        result = 0, 
        i,j;
        for (i = 0; i < hexNum.length; i++) {
            for (j = 0; j < hexArr.length; j++) {
                if (hexNum[i] === hexArr[j]) {
                    result += j * Math.pow(16, maxPower)
                    maxPower--;
                }
            }
        }
    return result;
}
