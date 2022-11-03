Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
        
    }
    return newArr;
}
function isEven(x){
    return x%2==0;
}

let arr =[ 1,2,3,4,5];

let filteredArr = arr.myFilter(isEven);
console.log(filteredArr);