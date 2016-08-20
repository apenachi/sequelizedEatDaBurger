'use strict';
var models = require("../models");

module.exports = {
	up: function (queryInterface, Sequelize) {
		/*
			Add altering commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkInsert('Person', [{
				name: 'John Doe',
				isBetaMember: false
			}], {});
		*/
		return models.Burger.bulkCreate([
			{burger_name: 'Bulk Burger'},
			{burger_name: 'Insert Burger'},
			{burger_name: 'Sequelize Burger'},
			{burger_name: 'Up Burger'},
			{burger_name: 'Down Burger'},
		]);
	},

	down: function (queryInterface, Sequelize) {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('Person', null, {});
		*/
		return models.Burger.bulkDelete([
			{burger_name: 'Bulk Burger'},
			{burger_name: 'Insert Burger'},
			{burger_name: 'Sequelize Burger'},
			{burger_name: 'Up Burger'},
			{burger_name: 'Down Burger'},
		]);
	}
};
