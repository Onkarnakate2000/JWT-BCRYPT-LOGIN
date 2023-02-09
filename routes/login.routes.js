var express = require('express');
var router = express.Router();
const loginController = require('../controller/login.controller');
router.post('/login',loginController.EmployeeLogin);
  
module.exports = router;
  