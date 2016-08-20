var chalk = require('chalk');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 'apenachi',
  password : 'just_ask_me',
  database : 'burgers_db'	//'db4free.net:3306/burgers_db'
});

connection.connect(function(err) {
  if(err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log(chalk.black.bgGreen.bold('Succesfully Connected to Database') + ' burgers_db');
});
// module.exports.connection = connection;
module.exports = connection;