let arr = [2,19,34,72,11,64,55,98];

let barr = arr.map(function(v,i){
    if(v%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(arr);
console.log(barr);