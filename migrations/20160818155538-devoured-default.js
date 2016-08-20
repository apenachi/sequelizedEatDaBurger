'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		// return queryInterface.renameColumn('Burgers', 'date', 'mydate');
		return queryInterface.changeColumn('Burgers', 'devoured',{
			type: Sequelize.BOOLEAN,
			defaultValue: 0
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.changeColumn('Burgers', 'devoured',{
			type: Sequelize.BOOLEAN,
		});
	}
};