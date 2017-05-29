var Users = require('../model/AdminSchema');



    exports.searchuser=function(request,response){
    var name1=request.body.name;
    var password1=request.body.password;
    Users.findOne({name:name1,password:password1},function(error,res){
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




