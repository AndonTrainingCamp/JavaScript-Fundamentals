/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let width = +(args[0]),
        height = +(args[1]),
        area = width * height,
        perimeter = 2 * (width + height);
    return area.toFixed(2) + ' ' + perimeter.toFixed(2);
}
