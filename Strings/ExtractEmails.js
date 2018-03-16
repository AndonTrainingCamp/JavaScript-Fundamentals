/*jslint devel: true */
/*jslint es6 */
'use strict';

const text = 'For help locating a specific very.common@example.com department, information about advertising, PR and opening of new stores,please send an e-mail to info@ch.guess.eu.  a';

console.log(extractEmails(text));;

function extractEmails(text) {
    let emailRegex = /[^\s]+@[^\s]+/g,
        emails;
    emails = text.match(emailRegex);
    for (let el in emails) {
        if (emails[el][emails[el].length - 1] < '0') {
            emails[el] = emails[el].slice(0, emails[el].length - 1);
        }
    }
    return emails;
}