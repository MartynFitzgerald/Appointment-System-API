/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  authentication.js  
|  Description:  This is the file that defines all of the API authentication 
|                such as confirming API keys before allowing functionality.
*===========================================================================*/
var connection = require('./dbConnection');
var errorHandler = require('./errorHandler');
var createError = require('http-errors');

var authenticate = function(api_key, next, callback) {
  connection.execute(`SELECT * FROM staff WHERE api_key="${api_key}"`, (error, results) => {
    if (results[0] != null || results[0] != undefined) {
      if (results[0].api_usage >= 0) {
        connection.execute(`UPDATE staff SET api_usage=api_usage + 1 WHERE api_key="${api_key}"`, (error, results) => {
          if (error || !results) {
            callback(next(createError(498, `An Error Has Occurred. The API Usage Was Unable To Be Updated, API Key - "${api_key}"`)));
          }
        });
      }
      callback(false);
    } else {
      callback(next(createError(499, `An Unknown Error Has Occurred Regarding The API or The Database Connection.`)));
    }
  });
};

/* 
  A function that receives an user api key to check weather the user
  are allowed to receive the result of their request.
*/
exports.key = function(sql, req, res, next) {
  authenticate(req.params.key, next, (error) => {
    if (!error) {
      connection.execute(sql, (error, results) => {
        errorHandler.external(res, next, error, results);
      });
    }
  });
};
