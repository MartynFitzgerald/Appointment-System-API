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

/* Scraping Location */
/* GET All Scraping Locations from the db. */
router.get('/API/USER/:key', user.get_all);
/* GET Scrapings Location from the db. */
router.get('/API/USER/:key', user.get_by_id);
/* INSERT Scrapings Location into the db. */
router.post('/API/USER/:key', user.insert);
/* UPDATE Scrapings Location in the db. */
router.put('/API/USER/:key', user.update_by_id);
/* DELETE Scrapings Location from the db. */
router.delete('/API/USER/:key', user.delete_by_id);

module.exports = router;