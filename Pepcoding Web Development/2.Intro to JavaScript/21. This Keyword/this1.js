// This keyword in nodeJS with non strict mode



// 1 :-

console.log(this); // It Returns Empty Object {}



// 2 :-
// function showThis(){ // It returns global Object
//     console.log(this);
// }

// showThis();



// 3 :-
// let obj={ 
//     name:'adam',
//     f:function(){
//         console.log(this); // Here it return object itself
//     }
// }

// obj.f();


// let obj={ 
//     name:'adam',
//     f:function(){
//         function g(){
//             console.log(this); // In this case it returns global object
//         }
//         g();
//     }
// }

// obj.f();