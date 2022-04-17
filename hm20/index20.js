//1
let arr1 =[1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr)
//2
let arr =[1, 2, 3];
let newArr = arr.reverse();
console.log(newArr)
//3
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr)
//4
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr)
//5
let arr = ['js', 'css', 'jq'];
console.log(arr[0])
//6
let arr = ['js', 'css', 'jq']
console.log(arr[2])
//7
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr)
//8
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(3, 5);
console.log(newArr)
//9
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1, 2)
console.log(arr)
//10
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1,4);
console.log(newArr)
//11
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(3,0, 'a', 'b', 'c');
console.log(arr)
//12
let arr = [1, 2, 3, 4, 5];
 arr.splice(1, 0, 'a','b');
 arr.splice(6, 0, 'c');
 arr.splice(8, 0, 'e');
console.log(arr)
//13
let arr =  [3, 4, 1, 2, 7];
arr.sort();
console.log(arr)
//14
let arr =  [5, 6, 7, 8, 9];
let sumArr = [5, 6, 7, 8, 9].reduce(function fun(a, b){
    return a + b
});
console.log(doubleArr)
//15
let arr =  [5, 6, 7, 8, 9];
let doubleArr = [5, 6, 7, 8, 9].map(function fun(arr){
    return arr * arr;
});
console.log(doubleArr)
//16
let arr =  [1,-3, 5, 6,-7, 8, 9,-11];
let newArr = [1,-3, 5, 6,-7, 8, 9,-11].filter(function fun(arr){
        return arr < 0
});
console.log(newArr)
//17
let arr = [1,-3, 5, 6,-7, 8, 9,-11];
let newArr = [1,-3, 5, 6,-7, 8, 9,-11].filter(function fun(arr){
    return arr % 2 === 0
});
console.log(newArr)
//18
let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let newArr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].filter(function fun(arr){
    return arr.length >= 5
});
console.log(newArr)
//19
let arr = [1, 2, [3, 4], 5, [6, 7]];
let newArr = [1, 2, [3, 4], 5, [6, 7]].filter(function fun(arr){
    return Array.isArray(arr)
});
console.log(newArr)
//20
let arr =  [5,-3, 6,-5, 0,-7, 8, 9];
let newArr =  [5,-3, 6,-5, 0,-7, 8, 9].filter(function fun(arr) {
    return arr < 0;

});
console.log(newArr.length)


