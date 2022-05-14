"use strict"
const numb = () => {
    let result = [];
    const getRandom = () => {
        if(result.length === 100) return;
        let num = Math.floor(Math.random() * 100);
        let found = false;
        if(result.includes(num)){
            getRandom();
        }
        result.push(num)
    }
    getRandom();
    return result;
    let found = true;
    if(!found){numb[numb.length] = getRandom};
}
const getNumber = numb();
console.log(getNumber)