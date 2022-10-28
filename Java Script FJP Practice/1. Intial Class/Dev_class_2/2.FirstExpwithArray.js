// Create an array 
// Ask from user what size of array the user want 
// take the elements of array as input from user 
//then print the array on console

let args=process.argv;
let n=parseInt(args[2]);
let arr=[];

for(let i=0;i<n;i++){
    arr[i]=parseInt(args[i+3]);
}

for(let i=0;i<n;i++){
    console.log(arr[i]);
}
console.log(arr);