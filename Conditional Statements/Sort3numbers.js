/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    if (+(args[0]) >= +(args[1]) && +(args[0]) >= +(args[2])) {
        if (+(args[1]) >= +(args[2])) {
            return args[0] + ' ' + args[1] + ' ' + args[2];
        } else {
            return args[0] + ' ' + args[2] + ' ' + args[1];
        }
    }
    if (+(args[1]) >= +(args[0]) && +(args[1]) >= +(args[2])) {
        if (+(args[0]) >= +(args[2])) {
            return args[1] + ' ' + args[0] + ' ' + args[2];
        } else {
            return args[1] + ' ' + args[2] + ' ' + args[0];
        }
    }
    if (+(args[2]) >= +(args[0]) && +(args[2]) >= +(args[1])) {
        if (+(args[0]) >= +(args[1])) {
            return args[2] + ' ' + args[0] + ' ' + args[1];
        } else {
            return args[2] + ' ' + args[1] + ' ' + args[0];
        }
    }
}