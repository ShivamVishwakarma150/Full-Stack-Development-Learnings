let person1={
    name :'Adam',
    age:25,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    }
}

// person1.showDetails();


let person2 ={
    name : "Steve"
}

// Isi ko ham prototypal Inheritance bolte hain
person2.__proto__ = person1; // person2 saari ki saari properties abb access kar skta hai basically jo inheritence me hota hai

// console.log(person2.name + " "+person2.age);

person2.showDetails();