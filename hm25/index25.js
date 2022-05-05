"use strict"
function makeFun(sum) {
    return function(sum2) {
        return sum + sum2;
    };
};

let num = makeFun(3);
let num2 = makeFun(5);

console.log(num(3));
console.log(num2(5));


