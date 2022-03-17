var express = require('express');
var mongoose = require('mongoose');
var User = require('./model/user')


var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sample",
{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err ? err : 'connected to database')
})


app.get('/',(req,res)=>{
    res.send('Welcome to Jungle')
}); 

app.use(express.json())

app.post('/users',(req,res)=>{
    User.create(req.body,(err,user) => {
        console.log(err,user);
        res.json(user);
    })}); 

app.get('/users',(req,res)=>{
        User.find({},(err,users)=>{
            console.log(err,users);
            res.json({users:users})
        })
    })

app.get('/users/:id',(req,res)=>{
    var id = req.params.id;
        User.find({_id :id} ,(err,users)=>{
            console.log(err,users);
            res.json({users})
        })
    })

//  it returns users data in array .



app.get('/users/:id',(req,res)=>{
        var id = req.params.id;
            User.findOne({_id :id} ,(err,users)=>{
                console.log(err,users);
                res.json(users)
            })
        })
app.get('/users/:id',(req,res)=>{
    var id = req.params.id;
        User.findById(id ,(err,users)=>{
          console.log(err,users);
          res.json(users)
        })
    })

//     - on PUT request on '/users/:id', update a user
// - use Model.update
// - use Model.updateOne
// - use Model.findByIdAndUpdate(id)

app.put('/users/:id',(req,res)=>{
    var id = req.params.id;
        User.update({_id : id},req.body ,(err,updatedUser)=>{
          console.log(err,updatedUser);
          res.json(updatedUser)
        })
    })
app.put('/users/:id',(req,res)=>{
        var id = req.params.id;
            User.updateOne({_id : id},req.body ,(err,updatedUser)=>{
              console.log(err,updatedUser);
              res.json(updatedUser)
            })
        })
app.put('/users/:id',(req,res)=>{
        var id = req.params.id;
        User.findByIdAndUpdate(id,req.body ,(err,updatedUser)=>{
        console.log(err,updatedUser);
        res.json(updatedUser)
        })
    })

app.delete('/users/:id',(req,res)=>{
        var id = req.params.id;
        User.findByIdAndDelete(id,req.body ,(err,deletedUser)=>{
         if (err) return next(err);
         res.send("user deleted");
        })
    })

app.use((req,res,next)=>{
    res.send('Page not found')

});
app.listen(5500,()=>{
    console.log('server is listening on port 5500');
})