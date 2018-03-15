/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
];

function parseTags(inputArr) {
    const exclude = /(<\w*>)(.*?)(<\w*>)/,
          regExTest = /(<\w*>)/;
    for (let el in inputArr) {
	inputArr[el] = inputArr[el].trim();
    }
    let inputText = inputArr.join('');
    function replacer(match, p1, p2, p3, startInd, text) {
        if (exclude.test(match)) {
            match = match.slice(1);
            return '<' + match.replace(/(<\w*>)(.*?)(<\/\w*>)/g, replacer);
        } else if (p1.slice(1) === p3.slice(2)) {
            return p2;
        }
    }
    do {
        inputText = inputText.replace(/(<\w*>)(.*?)(<\/\w*>)/g, replacer);
    } while (regExTest.test(inputText));
    return inputText;
}
console.log(parseTags(input));
