console.log('Hello');

// Asynchronous Callbacks
setTimeout(function st1(){
    console.log('I am st1');
},2000)

setTimeout(function st2(){
    console.log('I am st2');
},1000)

function sayBye(){
    console.log('Bye');
}

sayBye();



// Event loop basically saare event ka track maintain karta hai