var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Dev!l0p@rR',
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
