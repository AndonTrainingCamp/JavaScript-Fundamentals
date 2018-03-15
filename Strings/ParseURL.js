/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = ['http://telerikacademy.com/Courses/Courses/Details/239'];
parseURL(input);

function parseURL(inputArr) {
    const urlInput = inputArr[0];
    const URLregex = /(\w[^\r\n]{1,5})\:\/\/([^\/\r\n]+)(\/[^\r\n]*)/;
    let result = [];
    result = urlInput.match(URLregex);
    let protocol = result[1],
        server = result[2],
        resource = result[3];
    console.log('protocol: ' + protocol + '\n' + 
                'server: ' + server + '\n' + 
                'resource: ' + resource);
}