var express = require('express');
var mongoose = require('mongoose')
var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sample",(err)=>{
    console.log(err ? err : 'connected to database')
})

 
app.get('/',(req,res)=>{
    res.send('welcome')
});

app.use((req,res,next)=>{
    res.send('Page not found')
});

app.listen(4444,()=>{
    console.log('server is listening on port 4444');
});