
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userLoginInfo = new Schema({
    
    username : {type : String, required : true},
    password : {type : String, minLenth : 5, maxLength : 20},
    createdAt : {type : Date, default : (new Date()).getDate()}
});