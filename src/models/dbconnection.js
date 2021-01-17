/*=============================================================================
| Project Title:  Appointment System
|     Component:  API
|
|    File Name:  dbconnection.js  
|  Description:  This is the logic behind the MySQL database connection which
|                includes the login details for the database
*===========================================================================*/
var mysql = require('mysql');

/* 
  A function creates an connection to the mysql server which is then passed
  through to other JS functions to be utilized. 
*/

exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sa',
  password : '12345',
  database : 'appointment_system'
});