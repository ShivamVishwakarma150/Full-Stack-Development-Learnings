const fs = require('fs');

console.log('before');

// Asynchronous call
fs.readFile('f1.txt',cb);
function cb(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data+" ");
    }
}


console.log('after');