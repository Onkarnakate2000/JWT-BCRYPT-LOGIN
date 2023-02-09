const mysql=require("mysql");
const connection=mysql.createConnection({
    database:"studdb",
    host:"localhost",
    user:"root",
    port:3307,
    password:"",
})

connection.connect(err=>{
    err?console.log("Error While connecting!!"):console.log("successfully Connected!!!");
});
 
module.exports=connection;