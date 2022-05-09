'use strict'
//1
function getFactorial(n){
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
console.log(getFactorial(3))
//2
function pow(num, degree){
    if(num == 1) return 1;
    return num ** degree;
}
console.log(pow(2, 3))
//3
function sumFun(...arg){
    return arg.reduce((acc, cur) => acc + cur, 0)
}
console.log(sumFun(2, 3))