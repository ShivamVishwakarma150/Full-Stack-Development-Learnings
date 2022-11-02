// Functional Programming
// it is based on declarative code writing
// It is always focus on immutability in functional programming


// is the square of the number is even.

// Imperative way of writing code
const x = 5;
const xSquared = x*x;
let isEven;
if(xSquared%2==0){
    isEven=true;
}else{
    isEven=false;
}
console.log(isEven);


// Declarative way of writing code ( It is short simple nd clean ).

const isSquareEven = (x)=>((x*x)%2==0?true:false);
console.log(isSquareEven(4));




