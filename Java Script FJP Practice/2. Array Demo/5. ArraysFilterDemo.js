let arr = [2,9,18,32,74,57,63,58];

// filter jab jab true dega hamara function tb wo us particular element ko de dega jiske liye wo true return karega

// isme sare even wale select ho jayenge aur odd wale reject ho jayenge

// let even = arr.filter(function(v,i){
//     if(v%2==0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(even);


// let odd = arr.filter(v=>v%2==1);

// console.log(odd);

// Interview Questions
let v1 = arr.filter(v=>v%2==1);
let v2 = arr.map(v=>v%2==1);
console.log(v1);
console.log(v2);