/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  app.js  
|  Description:  This is the file that initializes the API. 
*===========================================================================*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
//Routes of all the different URLs that are possible within the API.
var indexRouter = require('./src/routes');

const app = express();
//View engine setup.
app.set('view engine', 'html');

app.use(logger('dev'));
//Support JSON-encoded bodies.
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); 

//Set main route of all possible URLs accepted within the API.
app.use('/', indexRouter);

//Catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError.NotFound());
});

//Error handler.
app.use(function(err, req, res, next) {
  //Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;