var Users = require('../model/AdminSchema');

exports.postuser=function(request,response){

    var user=new Users({
        name:request.body.name,
        password:request.body.password,
        Role:request.body.role
        

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

exports.getuser=function(request,response){
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




