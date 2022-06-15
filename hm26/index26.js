"use strict"
const getNumber = numb();
console.log(getNumber)
//
const numb = () => {
    let result = [];
    return function getRandom(){
        if (result.length === 100);
        let num = Math.floor(Math.random() * 100);
        if (result.includes(num)) {
            getRandom();
        } else {
            result.push(num)
        }
    }
    getRandom();
    return result;
}
const getNumber = numb();
console.log(getNumber)