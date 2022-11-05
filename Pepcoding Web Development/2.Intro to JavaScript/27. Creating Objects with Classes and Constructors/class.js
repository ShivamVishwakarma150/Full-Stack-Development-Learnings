// We can create new objects using class and constructor
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showDetails(){ // we need not write function keyword here in class which is actually object.
        return this.name;
    }

}

class PersonChild extends Person{
    constructor(){
        super('Jonas');
    }
}

// let person1 = new Person("Shivam",22);
// console.log(person1);
// console.log(person1.showDetails());
// Java script me inheritance use karna suggested nhi hota hai
let person1 = new PersonChild();
console.log(person1.showDetails());