
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userInfo = new Schema({
    name : String,
    email : {type :String, lowercase :true},
    age: {type : Number, default : 0},
});

var User = mongoose.model('User',userInfo);

module.exports = User;