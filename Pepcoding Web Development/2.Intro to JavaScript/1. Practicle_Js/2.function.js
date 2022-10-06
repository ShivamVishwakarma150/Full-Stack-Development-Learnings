// Non-Primitive -> array,objects,functions
// fn def
// There is no return type of a function in javascript
function sayHi(param){
    console.log("Hello from sayHi");
    console.log("param executed "+param+"\n");
    let rval=Math.random()>0.5?true:"less than 0.5";
    return rval;
}
// fn call
sayHi(10);
sayHi("hello");
sayHi([10,20,30,40,50]);
let rVal=sayHi([1,2,3,4,5]);
console.log("ravl ",rVal);