/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(args) {
    let numString = args[0],
        newNumString = [],
        i = 0;
    for (i = 0; i < numString.length; i++) {
        switch (+(numString[i])) {
            case 0: newNumString[i] = 'Zero'; break;
            case 1: newNumString[i] = 'One'; break;
            case 2: newNumString[i] = 'Two'; break;
            case 3: newNumString[i] = 'Three'; break;
            case 4: newNumString[i] = 'Four'; break;
            case 5: newNumString[i] = 'Five'; break;
            case 6: newNumString[i] = 'Six'; break;
            case 7: newNumString[i] = 'Seven'; break;
            case 8: newNumString[i] = 'Eight'; break;
            case 9: newNumString[i] = 'Nine'; break;
        }
    }
    if (numString.length === 1) {
        return newNumString[0];
    }
    if (numString.length === 2) {
        if (+(numString[0]) === 1) {
            switch (+(numString[1])) {
                case 0: return 'Ten';
                case 1: return 'Eleven';
                case 2: return 'Twelve';
                case 3: return 'Thirteen';
                case 4: return 'Fourteen';
                case 5: return 'Fifteen';
                case 6: return 'Sixteen';
                case 7: return 'Seventeen';
                case 8: return 'Eighteen';
                case 9: return 'Nineteen';
            }
        } else {
            newNumString[1] = newNumString[1].toLowerCase();
            if (+(numString[1]) === 0) {
                newNumString[1] = '';
            }
            switch (+(numString[0])) {
                case 2: return 'Twenty ' + newNumString[1];
                case 3: return 'Thirty ' + newNumString[1];
                case 4: return 'Forty ' + newNumString[1];
                case 5: return 'Fifty ' + newNumString[1];
                case 6: return 'Sixty ' + newNumString[1];
                case 7: return 'Seventy ' + newNumString[1];
                case 8: return 'Eighty ' + newNumString[1];
                case 9: return 'Ninety ' + newNumString[1];
            }
        }
    }
    if (numString.length === 3) {
        if (+(numString[1]) === 0 && +(numString[2]) === 0) {
            return newNumString[0] + ' hundred';
        }
        if (+(numString[1]) === 0) {
            return newNumString[0] + ' hundred and ' + newNumString[2].toLowerCase();
        }
        if (+(numString[1]) === 1) {
            switch (+(numString[2])) {
                case 0: return newNumString[0] + ' hundred and ten';
                case 1: return newNumString[0] + ' hundred and eleven';
                case 2: return newNumString[0] + ' hundred and twelve';
                case 3: return newNumString[0] + ' hundred and thirteen';
                case 4: return newNumString[0] + ' hundred and fourteen';
                case 5: return newNumString[0] + ' hundred and fifteen';
                case 6: return newNumString[0] + ' hundred and sixteen';
                case 7: return newNumString[0] + ' hundred and seventeen';
                case 8: return newNumString[0] + ' hundred and eighteen';
                case 9: return newNumString[0] + ' hundred and nineteen';
            }
        } else {
            newNumString[2] = newNumString[2].toLowerCase();
            if (+(numString[2]) === 0) {
                newNumString[2] = '';
            }
            switch (+(numString[1])) {
                case 2: return newNumString[0] + ' hundred and twenty ' + newNumString[2];
                case 3: return newNumString[0] + ' hundred and thirty ' + newNumString[2];
                case 4: return newNumString[0] + ' hundred and forty ' + newNumString[2];
                case 5: return newNumString[0] + ' hundred and fifty ' + newNumString[2];
                case 6: return newNumString[0] + ' hundred and sixty ' + newNumString[2];
                case 7: return newNumString[0] + ' hundred and seventy ' + newNumString[2];
                case 8: return newNumString[0] + ' hundred and eighty ' + newNumString[2];
                case 9: return newNumString[0] + ' hundred and ninety ' + newNumString[2];
            }
        }

    }
}