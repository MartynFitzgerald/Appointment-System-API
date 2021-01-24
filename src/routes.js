/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  routes.js  
|  Description:  This is the file that defines all of the routes to the 
|                application.
*===========================================================================*/
var express = require('express');
var router = express.Router();

/* Importing functions from other files */
var user = require('./controllers/user');

/* Creating a index page for the application */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Appointment System - API'
  });
});

/* GET All Users from the db. */
router.get('/API/USERS/:key', user.get_all);
/* GET User from the db. */
router.get('/API/USER/:key', user.get_by_id);
/* INSERT User into the db. */
router.post('/API/USER/:key', user.insert);
/* UPDATE User in the db. */
router.put('/API/USER/:key', user.update_by_id);
/* DELETE User from the db. */
router.delete('/API/USER/:key', user.delete_by_id);

module.exports = router;