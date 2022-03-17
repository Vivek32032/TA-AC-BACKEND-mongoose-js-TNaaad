
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userLoginInfo = new Schema({
    name : String,
    email : {type :String, lowercase :true},
    sport : [String],
    
},{timestamps : true});

var User = mongoose.model('User',userLoginInfo);

module.exports = User;