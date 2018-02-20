/*jslint devel: true */
/*jslint es6 */
'use strict';
solve(['2', '5', '1']);
function solve(args) {
    let min = +(args[0]),
        max = +(args[0]),
        sum = +(args[0]),
        avg,
        i;
    for (i = 1; i < args.length; i++) {
        if (+(args[i]) < min) {
            min = +(args[i]);
        }
        if (+(args[i]) > max) {
            max = +(args[i]);
        }
        sum += +(args[i]);
    }
    avg = sum / args.length;
    console.log('min=' + min.toFixed(2) + '\n' +
                'max=' + max.toFixed(2) + '\n' +
                'sum=' + sum.toFixed(2) + '\n' +
                'avg=' + avg.toFixed(2));
}
