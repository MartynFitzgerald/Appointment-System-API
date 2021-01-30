/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  branch.js 
|  Description:  This is the functions that retrieve the branch's information  
|                of the user's request which is then constructed and send to
|                a CRUD functionality.
*===========================================================================*/
var crud = require('../models/crud');
var check = require('../models/check');

var callSQL = (sql, req, res, next) => {
  check.key(req.params.key, (error) => {
    if (error) {
      res.status(200).json({
        result: error
      });
    } else {
      crud.call(sql, req, res, next);
    }
  });
}

/* Branch */
exports.get_all = (req, res, next) => {
  callSQL(`SELECT * FROM branch`, req, res, next);
};
exports.get_by_id = (req, res, next) => {
  callSQL(`SELECT * FROM branch WHERE id="${req.body.id}"`, req, res, next);
};
exports.insert = (req, res, next) => {
  callSQL(`INSERT IGNORE INTO branch VALUES ("${req.body.id}", "${req.body.latitude}", "${req.body.longitude}", "${req.body.name}", "${req.body.address}", "${req.body.last_updated_at}");`, req, res, next);
};
exports.update_by_id = (req, res, next) => {
  callSQL(`UPDATE branch SET latitude="${req.body.latitude}", longitude="${req.body.longitude}", name="${req.body.name}", address="${req.body.address}", last_updated_at="${req.body.last_updated_at}" WHERE id="${req.body.id}";`, req, res, next);
};
exports.delete_by_id = (req, res, next) => {
  callSQL(`DELETE FROM branch WHERE id="${req.body.id}"`, req, res, next);
};