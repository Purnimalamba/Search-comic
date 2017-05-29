var Users = require('../model/comicSchema');
exports.postComment=function(request,response){

    var user=new Users({
        
        comment:request.body.comment
        
     
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