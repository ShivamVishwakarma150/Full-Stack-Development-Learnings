console.log("Program starts");

setTimeout(() => {
    console.log('I am Set Timeout ');
}, 1000);

Promise.resolve().then((val)=>{
    console.log("Promise output");
})

console.log('Program Ends');

// OP :-
// Program Starts
// Program Ends
// Promise Output
// I am set TimeOut



// Event Loop :-

// console.log('Hi');
// setTimeOut(C b);
// setTimeOut(C b);
// promises;
// CLG("BYE");

// CS-> Call Stack
// setTimeout is wait in Node API.
// Promises also wait in NODE API.
// All promises goes to microTask Queue.
// All SetTimeout goes to CAll Back Queue
// How to decide which executes first.It decides by Event Loop.
// event loop is just like Security Guard .
// MicroTask is VIP which mean Promises run first it goes to Call stack and then execute.
// and then Now turn is of CallBackQueue using this setTimeout Statement Runs.
