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
  dbController.connection.query(`SELECT * FROM staff WHERE api_key="${api_key}"`, (error, results, fields) => {
    if (error || !results) 
    {
      callback("An Error Has Occurred. The API Key Entered Wasn't Found In The Database.");
    } 
    else if (results[0] != null || results[0] != undefined) 
    {
      if (results[0].api_usage == -1) {
        callback(false);
      } 
      else if (results[0].api_usage >= 0) 
      {
        dbController.connection.query(`UPDATE staff SET api_usage=api_usage + 1 WHERE api_key="${api_key}"`, (error, results, fields) => {
          if (error || !results) 
          {
            callback(`An Error Has Occurred. The API Usage Was Unable To Be Updated, API Key - "${api_key}"`);
          }
        });
        callback(false);
      }
    }
    else 
    {
      callback("An Error Has Occurred. The API Key Entered Wasn't Found In The Database.");
    }
  });
};