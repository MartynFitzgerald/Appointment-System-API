/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  branch.js 
|  Description:  This is the functions that retrieve the branch's information  
|                of the user's request which is then constructed and send to
|                a CRUD functionality.
*===========================================================================*/
var authentication = require('../models/authentication');

/* Branch */
exports.get_all = (req, res, next) => {
  authentication.key(`SELECT * FROM branch`, req, res, next);
};
exports.get_by_id = (req, res, next) => {
  authentication.key(`SELECT * FROM branch WHERE id="${req.body.id}"`, req, res, next);
};
exports.insert = (req, res, next) => {
  authentication.key(`INSERT IGNORE INTO branch VALUES ("${req.body.id}", "${req.body.latitude}", "${req.body.longitude}", "${req.body.name}", "${req.body.address}", "${req.body.last_updated_at}");`, req, res, next);
};
exports.update_by_id = (req, res, next) => {
  authentication.key(`UPDATE branch SET latitude="${req.body.latitude}", longitude="${req.body.longitude}", name="${req.body.name}", address="${req.body.address}", last_updated_at="${req.body.last_updated_at}" WHERE id="${req.body.id}";`, req, res, next);
};
exports.delete_by_id = (req, res, next) => {
  authentication.key(`DELETE FROM branch WHERE id="${req.body.id}"`, req, res, next);
};