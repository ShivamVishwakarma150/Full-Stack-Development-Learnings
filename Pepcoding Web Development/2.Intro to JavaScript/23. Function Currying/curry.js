function add(a,b){
    console.log(a+b);
}
add(2,4);

// Mai chahta hu ki a ya b me se kisi ek value ko constant kar denge

let addWith2 = add.bind(this,2); // this refers to add function and 2 assign to a

addWith2(5);
