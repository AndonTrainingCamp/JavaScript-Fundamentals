/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let minus = 0;
    let i;
    for (i = 0; i < args.length; i++) {
        if (+(args[i]) < 0) {
            ++minus;
        } else if (+(args[i]) === 0){
            return 0;
        }
    }
    return minus % 2 ? '-' : '+';
}