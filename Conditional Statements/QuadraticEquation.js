/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let a = +(args[0]),
        b = +(args[1]),
        c = +(args[2]),
        D = b * b - 4 * a * c;
    if (D < 0) {
        return 'no real roots';
    } else if (D === 0) {
        let x = -b / (2 * a);
        return 'x1=x2=' + x.toFixed(2);
    } else {
        let x1 = -(b + Math.sqrt(D)) / (2 * a),
            x2 = -(b - Math.sqrt(D)) / (2 * a);
        return 'x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2);
    }
}