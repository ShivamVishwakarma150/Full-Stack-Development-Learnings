// Map

let myArr = [1,2,3,4,5];

let squaredArr = myArr.map(x=>x*x);
// console.log(myArr);
// console.log(squaredArr);

// Custom Map

function myPollyfillMap(arr,cb){
    let newArr = [];

    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
};


function square(x){
    return x*x;
}

console.log(myArr);
console.log(myPollyfillMap(myArr,square));


// Filter

let fArr = [2,4,6,7.9,13,14,16];

let evenArr = fArr.filter(function(x){
    return x%2==0;
});
console.log(evenArr);

function myPollyfillFilter(arr,cb){
    let filteredArr =[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function isEven(x){
    if(x%2==0){
        return x;
    }
}

console.log(myPollyfillFilter(farr, isEven));
