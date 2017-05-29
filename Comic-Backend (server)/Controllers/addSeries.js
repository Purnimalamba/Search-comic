var Users = require('../model/seriesSchema');

exports.postSeries=function(request,response){

    var user=new Users({
        name:request.body.name,
        description:request.body.description,
        created_by:request.body.created_by,
        created_at:new Date(),
        updated_at:""
    });

    user.save(function(error,res){
        if (error){
       res.json({
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
    }
   response.json({
            "status": true,
            "respData": {
             "data":res
            }
})
    });

};

exports.getSeries=function(request,response){
Users.find({},function(error,res)

{
        if (error){
       res.json({
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
    }

    response.json({
            "status": true,
            "respData": {
             "data":res
            }
})
});
};




