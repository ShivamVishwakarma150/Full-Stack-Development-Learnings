function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='coffee'){
            resolve("Order Placed");
        }else{
            reject("Sorry, we only Serve Coffee");
        }
    })
}

function ProcessOrder(order){
    return new Promise(function(resolve){
        console.log('Order is Being processed');
        resolve(`Coffee Served for the ${order}`);
    })
}

// Scenario With Promises
// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log("Request Received");
//     let orderIsPRocessed = ProcessOrder(orderFromCustomer);
//     return orderIsPRocessed;
// }).then(function(orderIsPRocessed){
//     console.log(orderIsPRocessed);

// }).catch(function(err){
//     console.log(err);
// });



// It is became very hectic to deal with promises code bada ho jata hai to uske liye ham async await use kar skte hain. 


// Async-Await
// ye dusre code ko block nhi krega jo thread continuation me hai usko nhi rokega


// first of all we need a function 

async function serveOrder(){
    try {
        const orderReceived = await placeOrder('coffee');
        console.log(orderReceived);
        const processedOrder= await ProcessOrder    (orderReceived);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
    
}

serveOrder();

