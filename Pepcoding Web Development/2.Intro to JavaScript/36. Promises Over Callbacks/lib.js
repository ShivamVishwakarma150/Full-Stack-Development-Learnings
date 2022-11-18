function updateAccount(product , cb){
    setTimeout(()=>{
     console.log(product+' purchased');
     // Ho skta hai yaha callback do ya char bar ya usasase jyada call kar diya ho developer to product me problem hogi to is problem ko solve karne ke liye ham promises ka use kar skte hain.
     cb();   

     // Security Issue
     // cb();
     // cb();
     // cb();

    },2000);
}

// Solve Upper Problem using Promises
function promiseUpdateAccount(product){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },2000);
    })
}

module.exports ={
    updateAccount:updateAccount,
    promiseUpdateAccount:promiseUpdateAccount
}