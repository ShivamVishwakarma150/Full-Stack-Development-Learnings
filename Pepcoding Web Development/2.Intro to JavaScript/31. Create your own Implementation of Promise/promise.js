const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function customPromise(executer){
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];

    // ye ek result expect kar rha hai
    function resolve(result){
        if(state !== PENDING){
            return;
        }
        // agar resolve karna hai
        state = FULLFILLED;
        // result set to the value
        value = result;

        handlers.forEach((h)=>h(value));

    }
    function reject(err){
        if(state!==PENDING){
            return ; 
        }
        state = REJECTED;
        value = err;

        catchers.forEach((c)=>c(value));

    }


    // Writing then function
    this.then = function(successCallback){
        if(state === FULLFILLED){
            callback(value);
        }else{
            handlers.push(successCallback);
        }
    }

    // writing catch fuunction
    this.catch = function(failureCallback){
        if(state === REJECTED){
            failureCallback(value);
        }else{
            catchers.push(failureCallback);
        }
    }

    executer(resolve,reject);


}

const dowWork = (res,rej)=>{
    if(2!=2){
        setTimeout(() => {
            res('Promise Resolved Hello');
        }, 1000);
    }else{
        setTimeout(() => {
            rej('Promise Rejected Bye');
        }, 1000);
    }
}

let greetMsg = new customPromise(dowWork);

greetMsg.then((val)=>{
    console.log("Then log "+ val);
})

greetMsg.catch((val)=>{
    console.log('Catch log',val);
})
