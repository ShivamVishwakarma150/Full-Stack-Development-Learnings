const express = require('express');

const app = express();

// ye ek middleware function hai
// post , frontend -> json
app.use(express.json());
app.listen(3000);

let users ={};

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    users = req.body;
    res.json({
        message:"data received successfully",
        user:res.body
    });
})


// update -> patch

app.patch('/user',(req,res)=>{
    console.log('req->body : ',req.body);
    // update data in users object
    let dataToBeUpdated = req.body;
    for(key in  dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"Data Updated Sucessfully"
    })
})


// to delete Data
app.delete('/user',(req,res)=>{
    users={};
    res.json({
        message:"Data has been deleted"
    })
})

// params

app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params);
    res.send("user id received ");
})