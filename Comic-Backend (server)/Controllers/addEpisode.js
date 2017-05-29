var Users = require('../model/comicSchema');

exports.postEpisode=function(request,response){

    var user=new Users({
        name:request.body.name,
        image:request.body.image,
        story:request.body.story,
     
        season_id:request.body.season_id,
        created_at:new Date(),
        comment:"",
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
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
    });

};

exports.getEpisode=function(request,response){
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




