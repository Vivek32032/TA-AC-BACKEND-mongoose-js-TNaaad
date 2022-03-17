
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userLoginInfo = new Schema({
    title : {type : String,required : true},
    description: String,
    tags : [String],
    likes : Number,
    author : Schema.Types.ObjectId,
    comments : Schema.Types.ObjectId

},{timestamps : true});

var Article = mongoose.model('Article',userLoginInfo);

module.exports = Article;