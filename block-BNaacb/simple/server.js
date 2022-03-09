var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sample',(err)=>{
    console.log(err ? err : 'connected true');
})
var app = express();


app.get('/',(req,res)=>{
    res.send('Welcome')
})
app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})