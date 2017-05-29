var mongoose = require('mongoose');

var schema_series= new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    created_by: {type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date


});

module.exports=mongoose.model('seriesSchema',schema_series);