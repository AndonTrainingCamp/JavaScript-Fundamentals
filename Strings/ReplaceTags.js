/*jslint devel: true */
/*jslint es6 */
'use strict';

const inputStr = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log(replaceTags(inputStr));

function replaceTags(htmlInput) {
    const hrefTag = /(<a href="(w{3}[^\/\r\n]+\/a>)|<a href="(\w[^\r\n]{1,5}\:\/\/)([^\/\r\n]+\<\/\a\>)(\/[^\r\n]*)?)/g,
          urlRegex = /(w{3}[^\/\r\n\"]+)|(\w[^\r\n]{1,5}\:\/\/)([^\/\r\n\"]+)(\/[^\r\n]*)?/g,
          textRegex = /\>([^\n\r\>]+)\<\/a\>/g;
    let urls = htmlInput.match(urlRegex),
        text = htmlInput.match(textRegex),
        index = 0;
    let newText = htmlInput.replace(hrefTag, function (match) {
        match = '[' + text[index].slice(1, -4) + ']' + '(' + urls[index] + ')';
        index++;
        return match;
    });
    return newText;
}