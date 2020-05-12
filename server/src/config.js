const ck = require('ckey');
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: ck.DB_HOST,
  user: ck.DB_USER,
  password: ck.DB_PASS,
  database: 'atrium'
});
connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }

});
module.exports = connection;