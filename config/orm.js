var connection = require('../config/connection');

module.exports = {
	selectAll : function(table, callback) { 
		connection.query('SELECT * FROM burgers', function(err, rows) {
			if(err) {
				callback(err);
			};
			callback(false, rows);
		});
	},
	insertOne : function(burger, callback) {
		connection.query('INSERT INTO burgers (burger_name) values(?)', burger, function(err, rows) {
			if(err) {
				callback(err);
			};
			callback(false, rows);
		});
	},
	updateOne : function(id, callback) {
		connection.query('UPDATE burgers SET devoured = ? WHERE Id = ?', [true, id], function(err, rows) {
			if(err) {
				callback(err);
			};
			callback(false, rows);
		});
	},
	deleteOne : function(id, callback) {
		connection.query('DELETE FROM burgers WHERE Id = ?', id, function(err, rows) {
			if(err) {
				callback(err);
			};
			callback(false, rows);
		});
	}
}

// module.exports.displayAll = function(table, callback) {
// 	console.log('table: ', table);
// 	connection.query('SELECT * FROM burgers', table, function(err, rows) {
// 		if(err) {
// 			callback(err);
// 		};
// 		console.log(rows);
// 		callback(false, rows);
// 	});
// }
