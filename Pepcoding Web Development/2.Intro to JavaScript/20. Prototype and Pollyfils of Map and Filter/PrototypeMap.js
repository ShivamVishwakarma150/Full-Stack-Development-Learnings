Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

function square(x){
    return x*x;

}

let arr =[ 1,2,3,4,5];

let mappedArr = arr.myMap(square);
console.log(mappedArr);