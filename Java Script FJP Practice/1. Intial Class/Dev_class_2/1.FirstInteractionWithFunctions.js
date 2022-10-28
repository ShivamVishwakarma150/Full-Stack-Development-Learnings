let args=process.argv;
let n=parseInt(args);

console.log("Square of "+args[2]+" is "+square(args[2]));

function square(x){
    return x*x;
}