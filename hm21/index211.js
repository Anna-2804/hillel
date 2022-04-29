//1
const arr = ['a', 'b', 'c', 'd'];
arr.forEach(funcallback);
function funcallback(item, index, array) {
    console.log(`'${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}'`)
}
//2
const arr =[2, 5, 3, 9];
const result =(arr[0] * arr[1]) + (arr[2] * arr[3]);
console.log(result)
//3
const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0])
//4
const obj = {
    js:[‘jQuery’, ‘Angular’],
    php: ‘hello’,
    css: ‘world’
};
console.log(obj[js][0])
//5
const arr = [];
newArr = 'x';
for (const i = 0; i < 10; i++) {
    arr.push(newArr);
    newArr = newArr + 'x';
}
console.log(arr);
//6
const arr = [];
for(const i = 1; i < 10; i++){
    const newArr = '';
    for(const x = 0; x < i; x++) {
        newArr += i;
    }
    arr.push(newArr)
}
console.log(arr)
//7
const arr = [];
function arrayFill(value, number){
    for(const i = 0; i < number; i++){
        arr.push(value)
    }
    return arr

}
console.log(arrayFill('x', 5))
//8
const arr = [1, 2, 3, 0, 4, 5, 6];
const num = 1;
const result = arr.reduce(function(sum, elem) {
    if (sum > 10) {
        alert(num);
        return;
    } else {
        num++;
        return sum + elem;
    }
});
//9
const arr =[1, 2, 3, 4, 5];
 function src(arr){
     const newArr = [];
    for(const i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}
src(arr)
//10
const arr = [[1, 2, 3], [4, 5], [6]];
const sum = 0;
for (const i = 0; i < arr.length; i++) {
    for (const x = 0; x < arr[i].length; x++) {
        sum += arr[i][x];
    }
}
console.log(sum);
//11
const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const sum = 0;
for (const i = 0; i < arr.length; i++) {
    for (const x = 0; x < arr[i].length; x++) {
        for (const k = 0; k < arr[i][x].length; k++) {
            sum += arr[i][x][k];
        }
    }
}
console.log(sum);





