
var express = require('express');
var mongoose = require("mongoose");
var User = require('./model/user');
var Article = require("./model/article");
var Comment = require("./model/comments");

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sample",
{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err ? err : 'connected to database')
})

 
app.get('/',(req,res)=>{
    res.send(req.body)
});

app.use(express.json())


app.post('/user',(req,res)=>{
    console.log(req.body);
    User.create(req.body,(err,users) => {
        console.log(err,users);
        res.json(users);
    })
})
app.post('/article',(req,res)=>{
    console.log(req.body);
    Article.create(req.body,(err,articles) => {
        console.log(err,articles);
        res.json(articles);
    })
})
app.post('/comment',(req,res)=>{
    console.log(req.body);
    Comment.create(req.body,(err,comments) => {
        console.log(err,comments);
        res.json(comments);
    })
})


app.get('/user',(req,res)=>{
    User.find({},(err,users)=>{
        console.log(err,users);
        res.json({users:users})
    })
})
app.get('/comment',(req,res)=>{
    Comment.find({},(err,comments)=>{
        console.log(err,comments);
        res.json({comments:comments})
    })
})

app.get('/article',(req,res)=>{
    Article.find({},(err,articles)=>{
        console.log(err,articles);
        res.json({articles:articles})
    })
})


app.use((req,res,next)=>{
    res.send('Page not found')

});
app.listen(4000,()=>{
    console.log('server is listening on port 4k');
})

