// node 15.FirstTimer --n=10 --d=500

let minimist = require("minimist");
let args=minimist(process.argv);

let time=args.d;
let count=args.n;
let id=setInterval(function(){
    console.log(count+" time-units to go.");
    count--;
    if(count==0){
        console.log("TimeOut...");
        clearInterval(id);
    }
},time);

