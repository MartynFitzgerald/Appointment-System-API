/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  crud.js  
|  Description:  These are the functions that are used to communicate with the
|                data stored in the database.
*===========================================================================*/
var createError = require('http-errors');

/* 
  A function that requests certain types of data from database depending on the 
  sql string inputted declaring what table to gather the data from.
*/
exports.external = (res, next, error, results) => {
  let status = 500;

  if (error) {
    status = 500;
  } else if (results) {
    if (results.length > 0 || results.affectedRows > 0) {
      status = 200;
    } else if (results.length <= 0) {
      status = 404;
    } else if (results.affectedRows <= 0) {
      status = 406;
    }
  } else {
    status = 400;
  }
  
  if (status == 200) {
    res.status(status).json({
      status: status,
      message: 'OK',
      result: results
    });
  } else if (status == 500) {
    next(createError(status, error));
  } else {
    next(createError(status));
  }
};