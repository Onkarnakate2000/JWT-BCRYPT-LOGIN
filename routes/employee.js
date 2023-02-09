var express = require('express');
var router = express.Router();
const employeeController=require("../controller/employee.controller");
const {body}=require("express-validator");

/* GET users listing. */
router.get('/get',employeeController.getAllEmployee);
router.post('/create',
[
    body("e_name").notEmpty().withMessage("Name is required").isAlpha().withMessage("Number must have only characters"),
    body("e_email").notEmpty().withMessage("Email is required").isEmail().withMessage("Enter valid Email"),
    body("e_password").notEmpty().withMessage("Password must be required").isLength({min:1,max:50}),
],employeeController.createEmployee);
router.post('/update/id',employeeController.updateEmployee);
router.post('/delete/id',employeeController.deleteEmployee);
router.post('/search/id',employeeController.searchEmployee);
module.exports = router;
