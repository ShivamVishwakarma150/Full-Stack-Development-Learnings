const express = require('express');

const app = express();

// ye ek middleware function hai
// post , frontend -> json
app.use(express.json());
app.listen(3000);

let users =[
    {
        id:1,
        name:"Shivam"
    },
    {
        id:2,
        name:"Vikash"
    },
    {
        id:3,
        name:"Prashant"
    }
];

// mini app
const useRouter = express.Router();
const authRouter = express.Router();
// base route , router to use
app.use('/user',useRouter);
app.use("/auth",authRouter);

useRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

useRouter
.route("/:id")
.get(getUserById);

authRouter.route("/signup")
.get(getSignUp)
.post(postSignUp)


app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params);
    res.send("user id received ");
})

// Mounting

function getUser(req,res){
     res.send(users);
}

function postUser(req,res){
    console.log(req.body);
    users = req.body;
    res.json({
        message:"data received successfully",
        user:res.body
    });
}

function deleteUser(req,res){
    users={};
    res.json({
        message:"Data has been deleted"
    })
}

function updateUser(req,res){
    console.log('req->body : ',req.body);
    // update data in users object
    let dataToBeUpdated = req.body;
    for(key in  dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"Data Updated Sucessfully"
    })
}

function getUserById(req,res){
    console.log(req.params.id);
    let paramsID = req.params.id;
    let obj={};

    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramsID){
            obj=users[i];
        }
    }
    res.json({
        message:"req received",
        data:obj
    })
}

function getSignUp(req,res){
    res.sendFile('./public/index.html',{root:__dirname});
}

function postSignUp(req,res){
    let obj = req.body;
    console.log('backend ',obj);
    res.json({
        message:"User signed up",
        data:obj
    })
}