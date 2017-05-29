var Users = require('../model/seasonSchema');

exports.deleteSeason=function(request,response){

 var id=request.body.id;

    Users.findOne({_id:id},function(error,res){
       
         if(error){
            res.json({
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
        }
        console.log(res);
       if(res){
           
           res.remove({_id:id},function(error)
             {
               if(error){
               res.json({
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
            }
                response.json("sucessfully deleted");
           })
       }else{
           response.json("User does not exist");
       }


});
};
