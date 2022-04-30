//1
let arr = ['a', 'b', 'c', 'd'];
arr.forEach(funcallback);
function funcallback(item, index, array) {
    console.log(`'${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}'`)
}
//2
let arr =[2, 5, 3, 9];
let result =(arr[0] * arr[1]) + (arr[2] * arr[3]);
console.log(result)
//3
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0])
//4
let obj = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
console.log(obj.js[0])
//5
let arr = [];
newArr = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(newArr);
    newArr = newArr + 'x';
}
console.log(arr);
//6
let arr = [];
for(let i = 1; i < 10; i++){
    let newArr = '';
    for(let x = 0; x < i; x++) {
        newArr += i;
    }
    arr.push(newArr)
}
console.log(arr)
//7
let arr = [];
function arrayFill(value, number){
    for(let i = 0; i < number; i++){
        arr.push(value)
    }
    return arr

}
console.log(arrayFill('x', 5))
//8
let arr = [1, 2, 3, 0, 4, 5, 6];
let num = 1;
let result = arr.reduce(function(sum, elem) {
    if (sum > 10) {
        alert(num);
        return;
    } else {
        num++;
        return sum + elem;
    }
});
//9
let arr =[1, 2, 3, 4, 5];
 function src(arr){
     let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}
src(arr)
//10
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {
        sum += arr[i][x];
    }
}
console.log(sum);
//11
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {
        for (let k = 0; k < arr[i][x].length; k++) {
            sum += arr[i][x][k];
        }
    }
}
console.log(sum);





