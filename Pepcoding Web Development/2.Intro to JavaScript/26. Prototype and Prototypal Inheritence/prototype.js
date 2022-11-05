let arr = [1,2,3,4];

let person={
    name:'Steve',
    age:25,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    }
}

console.log(person.__proto__); // returns protoype of object

