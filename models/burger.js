var orm = require('../config/orm');

var burger = {
	get : function (table, callback) {
		orm.selectAll(table, callback);
	},
	post : function(burger, callback) {
		orm.insertOne(burger, callback);	
	},
	put : function(id, callback) {
		orm.updateOne(id, callback);
	},
	delete : function(id, callback) {
		orm.deleteOne(id, callback);
	}
}

module.exports = burger;