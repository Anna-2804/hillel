const arr = [1, 2, 3, -1, -2, -3];
const newArr = arr.filter(function pozitiFun(num){
    for(const num = 0; num > 0; num++){
        if(num > 0)
            return newArr.push(arr)
    }
    return null
});

pozitiFun([1, 2, 3, -1, -2, -3]);
console.log(newArr)