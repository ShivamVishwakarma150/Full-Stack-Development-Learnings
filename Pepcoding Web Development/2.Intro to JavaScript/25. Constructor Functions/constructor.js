
// Bhadda Code
// let car1 ={
//     brand : "BMW",
//     model : "X5",
//     color : 'white'
// }

// let car2 = {
//     brand: 'Mercedes',
//     model:'S Class',
//     color:"Red"
// }

// Let us use constructor functions


function car (brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.drive=function(){
        console.log("I am Driving "+this.model);
    }

}

let car1 = new car('BMW',"X5","Red"); // this - {}
let car2 = new car('SUZUKI',"ERTIGA","WHITE"); // this - {}

// we can access its properties individually also

// we can mutate on object
car1.brand = "Mahindra";
car1.drive();
car2.drive();
// console.log(car1);
// console.log(car2);