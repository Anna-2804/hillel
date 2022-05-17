'use strict'
function myPadString(str, num, sym = ' ', bool = false) {

    if(str === undefined) {
        return 'str should be defined';
    }
    if(typeof(str) !== 'string') {
        return 'str should be a string';
    }

    if(num === undefined) {
        return 'num should be defined';
    }
    if(isNaN(num)) {
        return 'num should be a number';
    }
    if(num <= 0 ) {
        return 'num should be a positive number';
    }

    if(sym === undefined) {
        return 'sym should be specified';
    }
    if(sym.length !== 1) {
        return 'sym should be a single character';
    }
    if( typeof(bool) !== 'boolean' ){
        bool = false;
    }

    if(str.length >= num) {
        return str.substr(0, num);
    } else if(bool) {
        let padLength = num - str.length;
        return sym.repeat(padLength) + str;
    } else {
        let padLength = num - str.length;
        return str + sym.repeat(padLength);
    }
}

console.log(myPadString('hello', 6, '*', false));
console.log(myPadString('hello', 8, '*',true));