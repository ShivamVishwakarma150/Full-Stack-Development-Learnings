let arr = [10,20,30,40,50];
let vl = arr.reduce(function(pv,cv,ci){
    console.log(pv+"-"+cv+"-"+ci);
    return pv+cv;
},5);
// yaha par jo 5 hai wo initial value hai jo pv me gyi hai

console.log(vl);

let val2 = arr.reduce((pv,cv,ci)=>pv+cv,5);
console.log(val2);