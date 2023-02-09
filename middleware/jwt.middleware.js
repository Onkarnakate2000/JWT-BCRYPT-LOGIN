const jwt=require("jsonwebtoken");
module.exports={
    checktoken:(req,res,next)=>{
        const token=req.headers.token;
        if(token){
            jwt.verify(token,'secretkey',(err,decoded)=>{
                if(err){
                    // console.log(token);
                    res.send({error:true,message:"Unauthorized User Token!"});
                }else{
                    req.employee=decoded;
                    console.log(req.employee);
                    next();
                }
            })
        }else{
            res.send({error:true,message:"Token Not Found!!"});
        }
    }
}