

module.exports.views =function(req,res,err){
    
    if(err){
           res.render(
               'home',{ 
                   msg: err
               
           })
       }else{
           console.log(req.file);
           return res.redirect('back');

       }    

  
   

} 