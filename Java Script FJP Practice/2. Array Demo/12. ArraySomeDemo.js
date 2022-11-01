// some returns true if someone in the array fullfills the criteria
// array ke kisi ek v element ke liye true aya to turat true return kar dega
let arr = [3,9,15,17,21];
let isThereAnyEvenElement = arr.some(function(v,i){
    console.log(v+" "+i);
    if(v%2==0) return true;
    else return false;
})

console.log(isThereAnyEvenElement);