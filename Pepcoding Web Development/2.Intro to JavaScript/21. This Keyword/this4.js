// This keyword in Browser with non strict mode
'use strict';


// 1 :-

// console.log(this); // It Returns Window Object



// 2 :-
// function showThis(){ 
//     console.log(this); // It returns undefined
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

// 4 :-
// let obj={ 
//     name:'adam',
//     f:function(){
//         function g(){
//             console.log(this); // In this case it returns undefined
//         }
//         g();
//     }
// }

// obj.f();