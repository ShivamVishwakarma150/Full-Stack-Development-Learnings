// Here All Callbacks are Synchronous callbacks
function greet(personName, age,callback){
    let msg = "Hello " + personName;
    let ageOfPerson = age;
    
    // console.log(msg);
    callback(msg);
    showAge(ageOfPerson);

}

function logGreeting(greeting){
    console.log(greeting);
}

function showAge(age){
    console.log(age);
}

greet("Shivam",22,logGreeting,showAge); // We pass logGreeting as callback in  greet function




// Mai chahta hu ki koi dusra function clg karke de

