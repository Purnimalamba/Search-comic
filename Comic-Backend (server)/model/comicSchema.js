var mongoose = require('mongoose');

var schema_comic= new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    story:{type:String},
    comment:{type:String},
    season_id:{type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date,
    


});

module.exports=mongoose.model('comicSchema',schema_comic);