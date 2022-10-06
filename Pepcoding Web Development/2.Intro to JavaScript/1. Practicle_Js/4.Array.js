// array declare
// let arr=[];

let array=[1,2,3,4,5];
console.log(array);
// console.log(array.length);
// let i=0;
// while(i<array.length){
//     console.log("element at index ",i," is ",array[i]);
//     i++;
// }

// inbuilt methods of array

// add in last -> arr.push
// add in first -> arr.unshift
array.push("last value");
array.unshift("first value");
console.log(":-``````````````````````");
console.log(array);

// remove from last -> arr.pop
// remove from first -> arr.shift
array.shift();
array.pop();
console.log(":-``````````````````````");
console.log(array);


// If you want part of array -> arr.slice()
let partOfAnArray=array.slice(2,4); // 2nd and 3rd index ke bande aa jayenge lekin original array ke andar change nhi hoga ye new array  return karta hai;
console.log(partOfAnArray);
console.log(array);

// If you want to remove part of array -> arr.splice() ye original array me changes kar deta hai
array.splice(2,3);
console.log(array);



