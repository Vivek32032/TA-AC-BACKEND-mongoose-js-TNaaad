
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var comments = new Schema({
        content : String,
        author : Schema.Types.ObjectId,
        article : String,
    },{timestamps :true})

var Comment = mongoose.model('Comment',comments);

module.exports = Comment;