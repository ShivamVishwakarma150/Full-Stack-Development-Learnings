// Printing in JavaScript in Console

console.log("Hello JS");

//declare Variable
// let a; mtlb hamne ye bataya ki hamare pass wk variable hai jiska name a hai.
// JS only tells that it is a variable.

/*
let a; // by default value of a is undefined
a=10;
console.log(a);
a=10.1;
a="Hello I am string";
a='Hello  I am also a string';
console.log("Variable contains",a);

*/

// variables types : primitive types : number , string ,boolean,null;

// JS syntactically equals to java lghbhag
// loop is JS
// let number=10;
// for(let i=1;i<=number;i++){
//     console.log("Number is:",i);
// }


// is prime
let number =23;
let flag=true;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(number ," is prime");
}else{
    console.log(number,"is not prime");
}

// primitive cannot break further.....
// not primitive type can break further array,function,Objects

