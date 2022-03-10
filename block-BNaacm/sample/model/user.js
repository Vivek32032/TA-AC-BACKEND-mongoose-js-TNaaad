
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userLoginInfo = new Schema({
    name : String,
    email : {type :String, lowercase :true},
    age: {type : Number, default : 0},
    favorites : [String],
    marks : [Number],
    username : {type : String, required : true},
    password : {type : String, minLenth : 5, maxLength : 15},
    createdAt : {type : Date, default : new Date()}
});

var User = mongoose.model('User',userSchema);

module.exports = User;