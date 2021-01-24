/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  user.js 
|  Description:  This is the functions that retrieve the scraping location's   
|                information of the user's request which is then constructed 
|                and send to a crud functionality.
*===========================================================================*/
var crud = require('../models/crud');
var check = require('../models/check');

var callSQL = function(sql, req, res, next) {
  check.key(req.params.key, function(error) {
    if (error) {
      res.status(200).json({
        result: error
      });
    } else {
      crud.call(sql, req, res, next);
    }
  });
}

/* User */
exports.get_all = function(req, res, next) {
  callSQL(`SELECT * FROM user`, req, res, next);
};
exports.get_by_id = function(req, res, next) {
  callSQL(`SELECT * FROM user WHERE id="${req.body.id}"`, req, res, next);
};
exports.insert = function(req, res, next) {
  callSQL(`INSERT IGNORE INTO user (id, first_name, last_name, email_address, password, phone_number, last_updated_at) VALUES ("${req.body.id}", "${req.body.first_name}", "${req.body.last_name}", "${req.body.email_address}", "${req.body.password}", "${req.body.phone_number}", "${req.body.last_updated_at}");`, req, res, next);
};
exports.update_by_id = function(req, res, next) {
  callSQL(`UPDATE user SET first_name="${req.body.first_name}", last_name="${req.body.last_name}", email_address="${req.body.email_address}", password="${req.body.password}", phone_number="${req.body.phone_number}", last_updated_at="${req.body.last_updated_at}" WHERE id="${req.body.id}";`, req, res, next);
};
exports.delete_by_id = function(req, res, next) {
  callSQL(`DELETE FROM user WHERE id="${req.body.id}"`, req, res, next);
};