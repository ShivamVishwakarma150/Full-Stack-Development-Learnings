// Types of function -> 
// function Statement
// define
function sayHello(param) {
    console.log("hello", param);
    return "sttrfbj";
}
// fn invocation
// sayHello(10);


// console.log("``````````````````");
// sayHello("Hello");
// console.log("``````````````````");
// sayHello([1, 2, 3, 4, 5]);
// console.log("``````````````````");
// sayHello({ name: "Jasbir" });
// console.log("``````````````````");
// let rVal = sayHello(); // undefined
// console.log("rVal",rVal); // agar wo function kuch return nhi karega to undefined show karega


// function are first class citizens
// function are treated as a variable
// assignment
// let a = [1, 2, 3, 4, 5];
// let b = a; // here we assign address of another variable
// console.log(b);

// function expression :- treated as variable
// jab function ka reference ham ek variable me store karte hain
// let fnContainer = function () {
//     console.log("I am Expression");
//     console.log("I am an anonymous function")
// }
// fnContainer();

// ----------------------------------------------------------------

//IIFE-> Immediately Invoked Function expression
// require, pollution,
// IFEE -> function bante hi apne app call v ho jayega 

// (function fn() {
//     console.log("I am IIFE");
//     console.log("I will run on my own");
// })();


// ----------------------------------------------------------------------------------


// Arrow Function  -> syntax , react ,this

// let fn = num => num * num;
// console.log(fn(5));

//  // First Class Citizens
// function are treated as a variable
// 1. assignment -> fn expression
// variable can be passed as a parameter
// 2.function can be passed as a parameter -> fp, hof ,callbacks
//   variable can be returned from a function
// 3.function can be returned from a function -> closure


// function sayHello(param) {
//     console.log("hello", param);
//     param();
//     return "sttrfbj";
// }
// // address
// function smaller() {
//     console.log("Hello i am smaller");
// }

// sayHello([1, 2, 3, 4]);
// let rVal = sayHello(smaller);
// console.log(rVal);


// closure
function outer() {
    console.log("I am outer returning inner");
    return function () {
        console.log("I am inner");
    }
}

let rVal = outer();
console.log("Rval",rVal);
rVal();