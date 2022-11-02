// map, filter, reduce

// MAP

let myArr = [1,2,3,4,5];

console.log(myArr);

let newArr = myArr.map(x=>x*x);

console.log(newArr);

// Filter

let filteredArr = myArr.filter(x=>x%2==0?true:false);
console.log(filteredArr);


// Reduce 

let sumArr = myArr.reduce(function(accumulator,x){
    // accumulator initialized  by 0
    accumulator+=x;
    return accumulator;
    
},0);

console.log(sumArr);