var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employee');
var loginRouter=require('./routes/login.routes');
// var middleware=require('./middleware/jwt.middleware');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',loginRouter);
app.use('/get',indexRouter);
app.use('/employee',employeeRouter);




module.exports = app;
