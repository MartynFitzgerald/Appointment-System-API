/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  check.js  
|  Description:  This is the file that defines all of the API checks such as 
|                confirming API keys before allowing functionality.
*===========================================================================*/
var dbController = require('./dbconnection');

/* 
  A function that receives an user id as an api key to check weather the user
  are allowed to receive the result of their request.
*/
exports.key = async function(api_key, callback) {
  dbController.connection.query(`SELECT * FROM staff WHERE api_key="${api_key}"`, function(error, results, fields) {
    if (error || !results) {
      console.error(`SQL - SELECT * FROM staff WHERE api_key="${api_key}"`);
      //Return false if error within sql.
      callback(false);
    } else if (results[0] != null || results[0] != undefined) {
      if (results[0].api_usage == -1) {
        //Return true since the limit is unlimited.
        callback(true);
      } else if (results[0].api_usage <= 2000) {
        dbController.connection.query(`UPDATE staff SET api_usage=api_usage+1 WHERE api_key="${api_key}"`, function(error, results, fields) {
          if (error || !results) {
            console.error(`SQL - UPDATE staff SET api_usage=api_usage+1 WHERE api_key="${api_key}"`);
            //Return false if error within sql.
            callback(false);
          }
          //Return true once updated api_usage.
          callback(true);
        });
      }
    } else {
      //Return false if no API key found.
      callback(false);
    }
  });
};