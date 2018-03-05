/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
];
const input2 = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
];

solve(input);
solve(input2);

function solve(xyArr) {
    let line = [],
        i,j;
    for (i = 0, j = 0; i <= xyArr.length - 4; i += 4, j++) {
        line[j] = {
            p1x: +(xyArr[i]),
            p1y: +(xyArr[i + 1]),
            p2x: +(xyArr[i + 2]),
            p2y: +(xyArr[i + 3]),
            calcLength: function() {
                let a,b,length;
                a = Math.abs(this.p1x - this.p2x);
                b = Math.abs(this.p1y - this.p2y);
                length = Math.sqrt(a * a + b * b);
                return length;
            }
        };
        console.log((line[j].calcLength()).toFixed(2));
    }
    if (line[0].calcLength() < line[1].calcLength() + line[2].calcLength() &&
            line[1].calcLength() < line[0].calcLength() + line[2].calcLength() &&
                line[2].calcLength() < line[0].calcLength() + line[1].calcLength()) {
                    console.log('Triangle can be built');
                } else {
                    console.log('Triangle can not be built');
                }
}
