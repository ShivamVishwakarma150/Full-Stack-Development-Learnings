const express = require('express');

const app = express();

// ye ek middleware function hai
// post , frontend -> json
app.use(express.json()); // global middleware 
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
app.use('/user',useRouter); //GM
app.use("/auth",authRouter);

useRouter
.route("/")
.get(getUser) // path specific middleware
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

useRouter
.route("/:id")
.get(getUserById);

authRouter
.route("/signup")
.get(middleware1,getSignUp,middleware2)
.post(postSignUp)

// function middleware1(req,res,next){
//     console.log('middleware encountered');
//     next();
// }


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

function middleware1(req,res,next){
    console.log('middleware1 encountered');
    next();
}
function middleware2(req,res,next){
    console.log('middleware2 encountered');
    // next();
    console.log("middleware 2 ended req/res cycle");
    res.sendFile('./public/index.html',{root:__dirname});
}

function getSignUp(req,res,next){
    
    console.log('getSignUp called');
    next();
    // res.sendFile('./public/index.html',{root:__dirname});
}

function postSignUp(req,res){
    let obj = req.body;
    console.log('backend ',obj);
    res.json({
        message:"User signed up",
        data:obj
    })
}