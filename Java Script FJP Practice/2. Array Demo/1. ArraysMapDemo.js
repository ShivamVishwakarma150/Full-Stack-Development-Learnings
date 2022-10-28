
// Map is itself a function
// Map takes as input a callback fn (with v an i)
// Map will call the callback multiple times (once for each value)
// for each run of callback , map will pass v and i to callback
//callback will process the value and index and return a single value 
// values returned by each run of callback will be collected in a new array
// Map returns that new array  

// Map Returns an array
// Map will pass each value and index into callback
// callback will process the value and index
// all the values returned by multiple runs of callback will be gathered un a new array
//and returned
// map return an array
// It is called as an iterator also


let arr = [2,5,9,8,15,11,6];

let sarr = arr.map((x,i)=>{
    console.log(i+" : "+x);
    return x*x;
})

console.log(sarr);

