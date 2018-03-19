/*jslint devel: true */
/*jslint es6 */
'use strict';

solve([200]);
function solve(params) {
    let s = params[0],
        count = 0,
        i,j,k;
    for (i = 0; i <= s / 4; i++) {
        for (j = 0; j <= s / 10; j++ ) {
            for (k = 0; k <= s / 3; k++) {
                if (i * 4 + j * 10 + k * 3 === s) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}