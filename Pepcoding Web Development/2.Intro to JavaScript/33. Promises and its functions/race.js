let p1 = new Promise(function(resolve,reject){
    resolve('Promise 1 is resolved');
})

let p2 = new Promise(function(resolve,reject){
    resolve('Promise 2 is resolved');
})


let p3 = new Promise(function(resolve,reject){
    resolve('Promise 3  is resolved');
}) 

// jab ham iske sath then karenge ar jo bhi value aayi hogi usko log karenge
// to hme ye pata chal rha hai ki jaise hi in teeno me se koi resolve hoga sabse pahle whi returm ho jayega immediately agar p1 par hi resolve ho gya to p2 par nhi jayega 
// Here race means kon pahle resolve hoga
Promise.race([p1,p2,p3]).then(val=>{
    console.log(val);
}).catch(err=>{
    console.log(err);
});