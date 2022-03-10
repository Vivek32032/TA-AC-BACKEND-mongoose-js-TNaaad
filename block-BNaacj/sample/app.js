
var express = require('express');
var mongoose = require("mongoose");

var app = express();
app.use(express.json());

app.use('/',(req,res)=>{
     req.send('welcome');
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k');
})

