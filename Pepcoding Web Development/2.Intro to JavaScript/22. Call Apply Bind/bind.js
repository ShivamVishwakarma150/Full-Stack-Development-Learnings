let person1={
    name : "Adam",
    age:25,

    
}

let person2 ={
    name:"Steve",
    age:20
}
let showDetails = function(city,car){
    console.log(this.name+" is "+this.age+" years old , he lives in "+city+" and he drives "+car);
}

// Bind function ko kisi variable me store kar lega taki ham baad me uska use kar ske.
let showDetailsBind = showDetails.bind(person2,"Noida","BMW");

showDetailsBind();
