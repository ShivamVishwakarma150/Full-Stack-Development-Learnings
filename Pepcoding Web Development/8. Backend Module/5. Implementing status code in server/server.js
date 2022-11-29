// Server Creation

// 1. http module

const http = require('http');
const fs= require('fs');

// return a server
const server = http.createServer((req,res)=>{
    // Here (req, res) is an object
    console.log("Request has been made from browser to server");
    // Request Object
    // console.log(req.method); // GET
    console.log(req.url); 
    

    // Response Object
    res.setHeader('Content-Type','text/html');
    // res.write('<h1 style="color:red">Hello, Pepcoders :)</h1>');
    // res.write('<h1 style="color:blue">Hello, Pepcoders :)</h1>');

    let path = './views';
    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='/404.html';
            // Working with status code
            res.statusCode=404;
            break;
    };
    console.log(path);

    // When your file is in different folder and you want to render it
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            // res.write(fileData);
            res.end(fileData);
        }
    })
    
});

// active rhna pdega on some port
// portNumber, host, callback function
server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');
})



