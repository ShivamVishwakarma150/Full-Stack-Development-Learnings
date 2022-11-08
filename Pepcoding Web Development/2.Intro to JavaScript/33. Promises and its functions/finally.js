var loader =true;
function test(){
    var a = 1+1;
    return new Promise(function(resolve,reject){
        if(a===2){
            resolve(' Promise Resolved YESSSSSSSSSS');

        }
        else{
            reject(' PRomise is rejected Noooooooooooooooooooooooo')
        }

    })
}

test().then((val)=>{
    console.log(val);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    // Clean up kind of functionality we must implement in finally
  loader = false;
})