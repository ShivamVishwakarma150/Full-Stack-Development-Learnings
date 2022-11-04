
// Normal Bind Method
let person1 = {
    name : 'Adam',
    age : 25
}

let showDetails  = function (city,state){
    console.log(this.name +" "+this.age+" "+city+" "+state);

}

let showDetailsBind  = showDetails.bind(person1,"noida","UP");
showDetailsBind('UP');



// PollyFill of Bind Method()
Function.prototype.myBind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        // obj.call(args[0],params[0],params[1]);
        obj.apply(args[0],[...params,...args2]);

    }
}

let showDetailsMyBind = showDetails.myBind(person1,"noida");

showDetailsMyBind('UP');