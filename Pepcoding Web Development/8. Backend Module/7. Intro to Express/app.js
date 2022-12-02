const express = require('express');

const app = express();

app.listen(3000);

// root
app.get('/',(req,res)=> {
    res.send("Hello World");
})
app.get('/about',(req,res)=> {
    res.send("about us");
})
app.get('/about-data',(req,res)=> {
    res.sendFile('./views/about.html',{root:__dirname});
})

// Redirect to about if about-us not found
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

// 404 page
app.use((req,res)=>{
    res.statusCode=404;
    res.sendFile('./views/404.html',{root:__dirname});
})

// order matters here

// root --> redirect --> 404 Page 