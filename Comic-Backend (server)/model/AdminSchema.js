var mongoose = require('mongoose');

var schema_user= new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    Role:{type:String},
    

});

module.exports=mongoose.model('AdminSchema',schema_user);