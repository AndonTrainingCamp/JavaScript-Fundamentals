/*jslint devel: true */
/*jslint es6 */
'use strict';

let frmt = '{0}, {1}, {0} text {2} {4} {3}',
    str = stringFormat(frmt, 1, 'Pesho', 'Gosho', 'Marta', 2.5);
console.log(str);

function stringFormat() {
    let frmtText,
        args = [].slice.call(arguments);
    let newArgs = args.slice(1);
    frmtText = args[0].replace(/\{(\d)\}/g, (match, p1) => newArgs[p1]);
    return frmtText;
}