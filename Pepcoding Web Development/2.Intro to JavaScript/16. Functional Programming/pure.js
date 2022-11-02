// Impure Function

let a = 4;

// Ye ek impure function hai kyuki ye ek external factor  par depend kar rha  hai yaha a=4 external factor hai
// function addNum(b){
//     console.log('The sum is ',a+b);
// }

// addNum(2);


// Pure Function

// It is a function which return same result for same set of arguments
// Hamara state mutate nhi hona chhaiye
// function addNum(a,b){
//     console.log('The sum is : ',a+b); // side effect
// }

// We can remove this side effect by using these statements
function addNum(a,b){
  return a+b;
}

console.log(addNum(2,5));



