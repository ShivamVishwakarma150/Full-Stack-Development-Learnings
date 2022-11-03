// This keyword in nodeJS with strict mode
// React by default is in strict mode
'use strict'

// 1 :-

console.log(this); // It Returns Empty Object {}



// 2 :-
// function showThis(){ // It returns undefined
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


let obj={ 
    name:'adam',
    f:function(){
        function g(){
            console.log(this); // Undefined
        }
        g();
    }
}

obj.f();