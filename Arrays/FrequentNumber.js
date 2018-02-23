/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let FREQUENT_NUMBER,
        REPEATED_TIMES = 0,
        counter = 0,
        i,j;
    for (i = 0; i < args.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (args[i] === args[j]) {
                counter++;
            }
        }
        if (counter > REPEATED_TIMES) {
            REPEATED_TIMES = counter;
            FREQUENT_NUMBER = args[i];
        }
        counter = 0;
    }
    console.log(FREQUENT_NUMBER + ' (' + REPEATED_TIMES + ' times)');
}