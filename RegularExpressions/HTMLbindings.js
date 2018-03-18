/*jslint devel: true */
/*jslint es6 */
'use strict';

let input = [
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
];
// Expected output:
// <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>

String.prototype.htmlBind = function (dataObj) {
    let result = this,
        dataBind = /data-bind-(\w+)="(\w+)"/g,
        matchesArr;
    while ((matchesArr = dataBind.exec(result)) !== null) {
        if (matchesArr[1] === 'content') {
            result = result.replace(/(<[^\n\r\/]+>)(<\/[^\n\r]+>)/g, function (match, p1, p2) {
                return p1 + dataObj[matchesArr[2]] + p2;
            });
        } else {
            result = result.replace(/(<[^\n\r]+")(>[^\n\r]+>)/g, function (match, p1, p2) {
                if (dataObj[matchesArr[2]] === undefined) {
                    return p1 + ' ' + matchesArr[1] + '="' + '"' + p2;
                }
                return p1 + ' ' + matchesArr[1] + '="' + dataObj[matchesArr[2]] + '"' + p2;
            });
        }
    }
    return result;
}

console.log(solve(input));

function solve(inputArr) {
    let data = JSON.parse(inputArr[0]),
        html = inputArr[1];
    return html.htmlBind(data);
}