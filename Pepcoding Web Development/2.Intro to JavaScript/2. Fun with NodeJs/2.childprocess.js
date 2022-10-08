let cp=require("child_process");
// cp.execSync("calc");// For open Calculator
// console.log("Trying to open Calculator");
// cp.execSync("start brave https:\\www.google.com");// For open Any Website

// console.log("Opended Calculator");

let output=cp.execSync("node abc.js");
console.log("Output 😍"+output);



// child_process is used to run all cmd prompt inside ndes js as a child process.