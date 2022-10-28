// npm init
// npm install minimist
// node 10_firstExpJSON.js

// const minimist = require("minimist");
// let args=minimist(process.argv);

// JSON = Javascript Object Notation
// JSON means saving data in the same format as of javascript objects 

let student1={
    name:"Shivam",
    age:22
}; // student1 an object. name and age are properties / data members

console.log(student1.name);
console.log(student1.age);


let agesKaArr=[10,20,30];
console.log(agesKaArr[0]);
console.log(agesKaArr[1]);
console.log(agesKaArr[2]);

let namesKaArray=["Shivam","Abhisek","Ritik"];
console.log(namesKaArray[0]);
console.log(namesKaArray[1]);
console.log(namesKaArray[2]);

let arrOfObjects=[
    {
        name:"Shivam",
        age:22
    },
    {
        name:"vikash",
        age:34
    },
    {
        name:"Prashant",
        age:23
    }
];

console.log(arrOfObjects[0].name);
console.log(arrOfObjects[0].age);

console.log(arrOfObjects[1].name);
console.log(arrOfObjects[1].age);

console.log(arrOfObjects[2].name);
console.log(arrOfObjects[2].age);