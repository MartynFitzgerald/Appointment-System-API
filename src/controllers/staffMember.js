/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  staffMember.js 
|  Description:  This is the functions that retrieve the staff's information
|                of the user's request which is then constructed and send
|                to a CRUD functionality.
*===========================================================================*/
var authentication = require('../models/authentication');

/* Staff Member */
exports.get_all = (req, res, next) => {
  authentication.key(`SELECT * FROM user LEFT JOIN staff ON user.id = staff.user_id WHERE staff.user_id IS NOT NULL`, req, res, next);
};
exports.get_by_id = (req, res, next) => {
  authentication.key(`SELECT * FROM user LEFT JOIN staff ON user.id = staff.user_id WHERE staff.user_id IS NOT NULL AND user_id="${req.body.id}"`, req, res, next);
};
exports.insert = (req, res, next) => {
  authentication.key(`INSERT IGNORE INTO staff VALUES ("${req.body.user_id}", "${req.body.branch_id}", "${req.body.api_key}", "${req.body.api_usage}", "${req.body.permission_level}", "${req.body.last_updated_at}");`, req, res, next);
};
exports.update_by_id = (req, res, next) => {
  authentication.key(`UPDATE staff SET api_key="${req.body.api_key}", api_usage="${req.body.api_usage}", permission_level="${req.body.permission_level}", last_updated_at="${req.body.last_updated_at}" WHERE user_id="${req.body.user_id}" AND branch_id="${req.body.branch_id}";`, req, res, next);
};
exports.delete_by_id = (req, res, next) => {
  authentication.key(`DELETE FROM staff WHERE user_id="${req.body.user_id}" AND branch_id="${req.body.branch_id}";`, req, res, next);
};