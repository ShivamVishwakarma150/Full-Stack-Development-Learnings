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

showDetails.apply(person1,["Delhi","Mercedes"]);
showDetails.apply(person2,["America","Hero"]);