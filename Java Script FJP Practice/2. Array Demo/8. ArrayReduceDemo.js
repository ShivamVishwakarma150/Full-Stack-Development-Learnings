
// reduce is a function . it takes input as a callback
// and callback takes 3 values
// callback has 3 params - pv,cv,ci
// for the first call to reduce pv is 0th value, cv is first value and ci is 1
// sare values ka use karke ( jo array me hain eg: sum of array , multiple of array ) ek single value return karega
// here pv is first value and cv is second value
let arr = [10,20,35,40,50];
let val = arr.reduce(function(pv,cv,ci){ // starts with pv:10 , cv:20 , ci:1  
    console.log(pv+" "+cv+" "+ci);
    return pv+cv;
})

console.log(val);

let val2 = arr.reduce((pv,cv,ci)=>pv+cv);
console.log(val2);