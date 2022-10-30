let arr2d = [
    [10,20,30],
    [22,17],
    [54,58,92,34],
    [61,31,55,92],
    [17]
];

let arr = arr2d.reduce(function(pv,cv,ci){
    let joined = pv.concat(cv);
    return joined;
},[]);

console.log(arr);

// [], [10,20,30], 0
// [10,20,30], [22,17], 1
// ....... 