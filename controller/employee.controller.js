
let connection=require("../connection/mysql.connection");
const bcrypt=require("bcrypt");
const {validationResult}=require("express-validator");
module.exports={
    getAllEmployee:(req,res)=>{
        connection.query(`select * from employee where e_id=${req.employee.id}`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:null});
            }
            else{
                res.send({error:false,data:result});
            }
        });
    },

    createEmployee:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
        const {e_name,e_email,e_password,e_salary,e_company}=req.body;
        const salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(e_password,salt);
        connection.query(`INSERT INTO employee(e_id, e_name, e_email, e_password, e_salary, e_company) VALUES (0,'${e_name}','${e_email}','${hashPassword}','${e_salary}','${e_company}')`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:null});
            }
            else{
                res.send({error:false,message:"User Created successfully"});
            }
        })
        }
    },
    updateEmployee:(req,res) =>{
        let id=req.params.id
        let {e_name,e_email,e_password,e_salary,e_company}=req.body;
        connection.query(`UPDATE employee SET e_name='${e_name}', e_email='${e_email}', e_password='${e_password}',e_salary='${e_salary}',e_company='${e_company}' WHERE id='${id}'`,
        (err,result)=>{
            if(err){
                res.status(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        } )
    },
    deleteEmployee:(req,res) =>{
        let id=req.params.id;
        connection.query(`DELETE FROM employee WHERE id='${id}'`,
        (err,result)=>{
            if(err){
                res.ststus(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        })
    },
    searchEmployee:(req,res)=>{
        let id=req.params.id;
        connection.query(`select * from employee where e_id:${id}`,(err,result)=>{
            if(err)
            {
                res.send({error:true,message:err.message});
            }
            else{
                res.send({error:false,data:result});
            }
        })
    }

}
