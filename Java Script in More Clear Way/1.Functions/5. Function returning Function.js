


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}


// Using Arrow Function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// Here greeterHey receives a function
const greeterHey = greet('Hey');

greeterHey('Shivam');
greeterHey('Prashant');

// It will really helps when we do functional programming
greetArr('Hello')('Shivam');


