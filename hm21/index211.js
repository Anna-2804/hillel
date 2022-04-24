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
    js:[‘jQuery’, ‘Angular’],
    php: ‘hello’,
    css: ‘world’
};
console.log(obj[js][0])
//5
let arr = [];
for(let i = 1; i < 10; i++){
    arr.push(i);
}
console.log(arr)
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
let arr =[1, 2, 3, 4, 5];
let sum = 0;
let newArr = [];
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(sum > 10){
        newArr.push(arr[i])
    }
}
console.log(newArr.length +1)
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
let sum = arr;
arr.flat();
let newArr = [[1, 2, 3], [4, 5], [6]].reduce(function(acc, item){
        acc += item;
        return acc;
    },
    0
)
let sum2 = arr;
let newArr2 = [[1, 2, 3], [4, 5], [6]].reduce(function(acc, item){
        if(Array.isArray(item)){
            item.forEach(function(subItem){
                acc.push(subItem)
            })
        }else{
            acc.push(item)
        }
        return acc;
    },
    []
)
let newArr3 = [[1, 2, 3], [4, 5], [6]].reduce(function(acc, item){
        acc += item;
        return acc;
    },
    0)
console.log(sum)
//11
let arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function fun(arr){
    let sum = 0;
    for(let elem of arr){
        if(typeof elem =="object"){
            sum += func(elem)
        }
    }
    return sum
}

console.log(fun([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]))





