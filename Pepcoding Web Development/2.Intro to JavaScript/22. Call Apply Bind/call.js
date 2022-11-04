let person1={
    name : "Adam",
    age:25,

    
}

// ki kisi function ko agar ham multiple objects ke liye call karna chhahte hain to ham call function me hame bs us call ka reference dena hota hai ki for this object call this function .
// Eg: showDetails.call(person1,"Delhi","Mercedes");

// Ham chahte hain ki person2 ka use karke person1 ke show details ko call karna chhate hain 
let person2 ={
    name:"Steve",
    age:20
}

// let showDetails = function(){
// console.log(this.name+" is "+this.age+" years old");
// }

let showDetails = function(city,car){
console.log(this.name+" is "+this.age+" years old , he lives in "+city+" and he drives "+car);
}
// function Borrowing
// person1.showDetails.call(person2); // using call()

// We can use it with define function globally
// showDetails.call(person1);
// showDetails.call(person2);


showDetails.call(person1,"Delhi","Mercedes");
showDetails.call(person2,"America","Hero");

// person1.showDetails();
// person2.showDetails();