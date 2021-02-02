/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  appointment.js 
|  Description:  This is the functions that retrieve the appointment's information
|                of the user's request which is then constructed and send to a
|                CRUD functionality.
*===========================================================================*/
var authentication = require('../models/authentication');

/* Appointment */
exports.get_all = (req, res, next) => {
  authentication.key(`SELECT * FROM appointment`, req, res, next);
};
exports.get_by_id = (req, res, next) => {
  authentication.key(`SELECT * FROM appointment WHERE id="${req.body.id}"`, req, res, next);
};
exports.insert = (req, res, next) => {
  authentication.key(`INSERT IGNORE INTO appointment VALUES ("${req.body.id}", "${req.body.end}", "${req.body.start}", "${req.body.last_updated_at}", "${req.body.staff_user_id}", "${req.body.staff_branch_id}", "${req.body.user_id}");`, req, res, next);
};
exports.update_by_id = (req, res, next) => {
  authentication.key(`UPDATE appointment SET end="${req.body.end}", start="${req.body.start}", last_updated_at="${req.body.last_updated_at}", staff_user_id="${req.body.staff_user_id}", staff_branch_id="${req.body.staff_branch_id}", user_id="${req.body.user_id}" WHERE id="${req.body.id}";`, req, res, next);
};
exports.delete_by_id = (req, res, next) => {
  authentication.key(`DELETE FROM appointment WHERE id="${req.body.id}";`, req, res, next);
};