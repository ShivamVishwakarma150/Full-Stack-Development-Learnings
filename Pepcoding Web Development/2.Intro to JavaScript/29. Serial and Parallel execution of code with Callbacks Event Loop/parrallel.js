const fs = require('fs');
console.log('before');

// Here Files Read in random order
// Node API jo pahle execute ho gya usko call back queue me bhej dega
// Aur isko wjh se random files read honge koi perticular order me read nhi hoga
fs.readFile('f1.txt',cb);
fs.readFile('f2.txt',cb1);
fs.readFile('f3.txt',cb2);


function cb(err,data){
        console.log(data+" "+"f1");
}
function cb1(err,data){
        console.log(data+" "+"f2");
}
function cb2(err,data){
        console.log(data+" "+"f3");
}
console.log("After");
