/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  routes.js  
|  Description:  This is the file that defines all of the routes to the 
|                application.
*===========================================================================*/
var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* Importing functions from other files */
var user = require('./controllers/user');
var branch = require('./controllers/branch');
var staff = require('./controllers/staff');
var appointment = require('./controllers/appointment');

/* GET All Users from the db. */
router.get('/USERS/:key', user.get_all);
/* GET User from the db. */
router.get('/USER/:key', user.get_by_id);
/* INSERT User into the db. */
router.post('/USER/:key', user.insert);
/* UPDATE User in the db. */
router.put('/USER/:key', user.update_by_id);
/* DELETE User from the db. */
router.delete('/USER/:key', user.delete_by_id);

/* GET All Branches from the db. */
router.get('/BRANCHES/:key', branch.get_all);
/* GET Branch from the db. */
router.get('/BRANCH/:key', branch.get_by_id);
/* INSERT Branch into the db. */
router.post('/BRANCH/:key', branch.insert);
/* UPDATE Branch in the db. */
router.put('/BRANCH/:key', branch.update_by_id);
/* DELETE Branch from the db. */
router.delete('/BRANCH/:key', branch.delete_by_id);

/* GET All Staffs from the db. */
router.get('/STAFFS/:key', staff.get_all);
/* GET Staff from the db. */
router.get('/STAFF/:key', staff.get_by_id);
/* INSERT Staff into the db. */
router.post('/STAFF/:key', staff.insert);
/* UPDATE Staff in the db. */
router.put('/STAFF/:key', staff.update_by_id);
/* DELETE Staff from the db. */
router.delete('/STAFF/:key', staff.delete_by_id);

/* GET All Appointments from the db. */
router.get('/APPOINTMENTS/:key', appointment.get_all);
/* GET Appointment from the db. */
router.get('/APPOINTMENT/:key', appointment.get_by_id);
/* INSERT Appointment into the db. */
router.post('/APPOINTMENT/:key', appointment.insert);
/* UPDATE Appointment in the db. */
router.put('/APPOINTMENT/:key', appointment.update_by_id);
/* DELETE Appointment from the db. */
router.delete('/APPOINTMENT/:key', appointment.delete_by_id);

module.exports = router;