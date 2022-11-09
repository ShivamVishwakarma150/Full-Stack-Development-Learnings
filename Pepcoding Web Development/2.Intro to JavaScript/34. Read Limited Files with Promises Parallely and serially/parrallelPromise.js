const fs = require('fs');

let fileRead1 = fs.promises.readFile('./f1.txt');
// console.log(fileRead1);

let fileRead2 = fs.promises.readFile('./f2.txt');
let fileRead3 = fs.promises.readFile('./f3.txt');

// It Executes Parallely
fileRead1.then((data)=>{
    console.log('data ->',data+"f1");
});
fileRead2.then((data)=>{
    console.log('data ->',data+"f2");
});
fileRead3.then((data)=>{
    console.log('data ->',data+"f3");
});