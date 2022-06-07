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
function sum(a, b) {
    if(b == 0)
        return a;
    return sum(a + 1, b - 1);
}

console.log(sum(2, 3));