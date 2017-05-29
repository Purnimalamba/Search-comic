var mongoose = require('mongoose');


var schema_season= new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    starts_on:{type: String},
    ends_on:{type: String},
    series_id : {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at:""


});

module.exports=mongoose.model('seasonSchema',schema_season);