/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  user.js 
|  Description:  This is the functions that retrieve the user's information
|                of the user's request which is then constructed and send
|                to a CRUD functionality.
*===========================================================================*/
var authentication = require('../models/authentication');

/* User */
exports.get_all = (req, res, next) => {
  authentication.key(`SELECT user.* FROM user LEFT JOIN staff ON user.id = staff.user_id WHERE staff.user_id IS NULL`, req, res, next);
};
exports.get_by_id = (req, res, next) => {
  authentication.key(`SELECT user.* FROM user LEFT JOIN staff ON user.id = staff.user_id WHERE staff.user_id IS NULL AND id="${req.body.id}"`, req, res, next);
};
exports.insert = (req, res, next) => {
  authentication.key(`INSERT IGNORE INTO user VALUES ("${req.body.id}", "${req.body.first_name}", "${req.body.last_name}", "${req.body.email_address}", "${req.body.password}", "${req.body.phone_number}", "${req.body.last_updated_at}");`, req, res, next);
};
exports.update_by_id = (req, res, next) => {
  authentication.key(`UPDATE user SET first_name="${req.body.first_name}", last_name="${req.body.last_name}", email_address="${req.body.email_address}", password="${req.body.password}", phone_number="${req.body.phone_number}", last_updated_at="${req.body.last_updated_at}" WHERE id="${req.body.id}";`, req, res, next);
};
exports.delete_by_id = (req, res, next) => {
  authentication.key(`DELETE FROM user WHERE id="${req.body.id}"`, req, res, next);
};