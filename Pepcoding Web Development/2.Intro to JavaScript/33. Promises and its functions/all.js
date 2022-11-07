let p1 = new Promise(function(resolve,reject){
    resolve('Promise 1 is resolved');
})

let p2 = new Promise(function(resolve,reject){
    reject('Promise 2 is rejected');
})


let p3 = new Promise(function(resolve,reject){
    resolve('Promise 3  is resolved');
})

// If we want to resolve our promise and it returns also a promise
let promiseAll = Promise.all([p1,p2,p3]);
// console.log(promiseAll);

promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr);
}).catch(err=>{ // jo reject me pass hua hai whi err me pass ho jayega explicitly
    console.log(err);
})
