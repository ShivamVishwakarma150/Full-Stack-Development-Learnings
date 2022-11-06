const fs = require('fs');
console.log('before');


fs.readFile('f1.txt',cb);


// Is trh ham order serially maintain kar lenge
// wo random behaviour khud hata liya
function cb(err,data){
        console.log(data+" "+"f1");
        fs.readFile('f2.txt',cb1);
function cb1(err,data){
        console.log(data+" "+"f2");
        fs.readFile('f3.txt',cb2);
function cb2(err,data){
        console.log(data+" "+"f3");
}
}
}
console.log("After");
