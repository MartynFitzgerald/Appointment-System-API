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

/* User */
exports.get_all = async function(req, res, next) {
  check.key(req.params.key, function(error) {
    if (error) {
      res.status(200).json({
        result: error
      });
    } else {
      crud.call(`SELECT * FROM user`, req, res, next);
    }
  });
};
exports.get_by_id = function(req, res, next) {
  check.key(req.params.key, function(accepted) {
    if (accepted) {
      crud.call(`SELECT * FROM user WHERE id="${req.body.id}"`, req, res, next);
    } else {
      res.status(200).json({
        result: "An Error Has Occurred. Possibly, You Have Exceeded Amount Of Requests Or Invalid API Key"
      });
    }
  });
};
exports.insert = function(req, res, next) {
  check.key(req.params.key, function(accepted) {
    if (accepted) {
      crud.call(`INSERT IGNORE INTO user (id, fName, lName, email_address, password, phone_number, last_updated_at) VALUES ("${req.body.id}", "${req.body.fName}", "${req.body.lName}", "${req.body.email_address}", "${req.body.password}", "${phone_number}", "${last_updated_at}");`, req, res, next);
    } else {
      res.status(200).json({
        result: "An Error Has Occurred. Possibly, You Have Exceeded Amount Of Requests Or Invalid API Key"
      });
    }
  });
};
exports.update_by_id = function(req, res, next) {
  check.key(req.params.key, function(accepted) {
    if (accepted) {
      crud.call(`UPDATE user SET fName="${req.body.fName}", lName="${req.body.lName}", email_address=${req.body.email_address}, password=${req.body.password}, phone_number=${req.body.phone_number}, last_updated_at=${req.body.last_updated_at} WHERE id="${req.body.id}";`, req, res, next);
    } else {
      res.status(200).json({
        result: "An Error Has Occurred. Possibly, You Have Exceeded Amount Of Requests Or Invalid API Key"
      });
    }
  });
};
exports.delete_by_id = function(req, res, next) {
  check.key(req.params.key, function(accepted) {
    if (accepted) {
      crud.call(`DELETE FROM user WHERE id="${req.body.id}"`, req, res, next);
    } else {
      res.status(200).json({
        result: "An Error Has Occurred. Possibly, You Have Exceeded Amount Of Requests Or Invalid API Key"
      });
    }
  });
};