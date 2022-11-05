// jo bhi array ki ham properties and methods dekhte hain wo sab prototype se milte hain
let arr = [1,2,3,4];

console.log(arr.__proto__); // to see all inbuilt methods of array and when we call it it returns an array.

console.log(arr.__proto__.__proto__); // It returns all properties and method of object. which means we can say that array is also a object


console.log(arr);