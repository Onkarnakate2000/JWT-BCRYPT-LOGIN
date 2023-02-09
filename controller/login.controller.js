
let connection=require("../connection/mysql.connection");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

module.exports={
    EmployeeLogin:(req,res)=>{
        
        const UserName=req.body.UserName;
        const Password=req.body.Password;
        connection.query(`select * from employee where e_email='${UserName}'`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message});
            }
            else{
                const isSame=bcrypt.compareSync(Password,result[0].e_password);
                if(isSame){
                    const token=jwt.sign({id:result[0].e_id,Name:result[0].e_name},'secretkey',{expiresIn:'1hr'});
                    console.log(token);
                    res.send({error:false,token:token,message:"success"});
                }
                else{
                    res.send({error:true,message:'Invalid username and Password'});
                }
            }
        })
    }
}