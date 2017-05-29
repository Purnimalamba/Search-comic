var Users = require('../model/comicSchema');



    exports.searchEpisode=function(request,response){
    var name1=request.body.search;
    console.log(name1);

    Users.find({name:name1},function(error,res){
        if(error){
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




