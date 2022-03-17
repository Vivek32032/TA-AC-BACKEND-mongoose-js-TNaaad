
var express = require('express');
var mongoose = require("mongoose");
var Product = require('./model/product')

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sample",
{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err ? err : 'connected to database')
})

 
app.get('/',(req,res)=>{
    res.send('Welcome')
});

app.use(express.json())


app.post('/products',(req,res)=>{
    // console.log(req.body);
    Product.create(req.body,(err,product) => {
        console.log(err,product);
        res.json(product);
    })

   
})
app.get('/products',(req,res)=>{
    Product.find({},(err,products)=>{
        console.log(err,products);
        res.json({products:products})
    })
})
// app.get('/products',(req,res)=>{
//     Product.find({"title":"Google Pixel"},(err,products)=>{
//         // console.log(err,products);
//         res.json({products})
//     })
// });
app.get('/products/:id',(req,res)=>{
    var id = req.params.id;
    Product.findById(id,(err,products)=>{
        console.log(err);
        res.json(products)
    })
});
app.get('/products/:id',(req,res)=>{
    var id = req.params.id;
    Product.findByIdAndUpdate(id,req.body,(err,updatedproduct)=>{
        console.log(err);
        res.json(updatedproduct)
    })
})
app.delete('/products/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,(err,deletedProduct)=>{
        res.send(`${deletedProduct.title} was deleted`);
    })
})
app.use((req,res,next)=>{
    res.send('Page not found')

});
app.listen(4000,()=>{
    console.log('server is listening on port 4k');
})

