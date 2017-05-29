var Users = require('../model/seasonSchema');

exports.postSeason=function(request,response){

    var user=new Users({
        name:request.body.name,
        description:request.body.description,
        starts_on:request.body.starts_on,
        ends_on:request.body.ends_on,
        series_id:request.body.series_id,
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

exports.getSeason=function(request,response){
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




