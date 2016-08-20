'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Burgers', 'date');
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Burgers', 'date', {
          type: Sequelize.DATE,
    });
  }
};
