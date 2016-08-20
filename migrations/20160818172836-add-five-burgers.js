'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {

		return queryInterface.bulkInsert('Burgers', [
			{id:1, burger_name: 'Bulk Burger', createdAt: new Date(), updatedAt: new Date()},
			{id:2, burger_name: 'Insert Burger', createdAt: new Date(), updatedAt: new Date()},
			{id:3, burger_name: 'Sequelize Burger', createdAt: new Date(), updatedAt: new Date()},
			{id:4, burger_name: 'Up Burger', createdAt: new Date(), updatedAt: new Date()},
			{id:5, burger_name: 'Down Burger', createdAt: new Date(), updatedAt: new Date()},
		], {});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Burgers', null, {});
	}
};
