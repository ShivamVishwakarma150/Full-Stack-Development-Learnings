// Object -> Group of key : value pair
// where key : value -> property 
// where key : function -> method 
// let obj={

// };

let cap={
    name:"Steve",
    lastName:"Rogers",
    address:{
        city:"Manhatten",
        state:"New York"
    },
    age:35,
    isAvanger:true,
    movies:["First Avanger","Winter Soldier","Civil War"],
    sayHi:function(){
        console.log("Cap say's Hi");
    }

};

// For Getting values
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
cap.sayHi();

// Setting values / Update values
// console.log("cap : ",cap);
// cap.age=36;
// cap.isAvanger=false;
// cap.friends=["Tony","Bruce","Peter"];
// console.log('`````````````````````````');
// //delete
// delete cap.address;
// console.log("cap : ",cap);


// Looping on Object using for in loop
// for(let key in cap){
//     console.log(key," : "+cap[key]);
// }

// Searching values using key
let propKey="age";

console.log(cap[propKey]);
console.log(cap.age);
console.log(cap["age"]);

// if key in object is not present then it gives undefined.
console.log(cap.ajaxx);
