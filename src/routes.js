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
router.get('/API/:key/USER/', user.get_all);
/* GET Scrapings Location from the db. */
router.get('/API/:key/USER/', user.get_by_id);
/* INSERT Scrapings Location into the db. */
router.post('/API/:key/USER/', user.insert);
/* UPDATE Scrapings Location in the db. */
router.put('/API/:key/USER/', user.update_by_id);
/* DELETE Scrapings Location from the db. */
router.delete('/API/:key/USER/', user.delete_by_id);

module.exports = router;