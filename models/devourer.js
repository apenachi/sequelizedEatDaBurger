'use strict';
module.exports = function(sequelize, DataTypes) {
  var Devourer = sequelize.define('Devourer', {
    devourer_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Devourer.hasOne(models.Burger);
        // models.Burger.hasOne(Devourer, {as:'devourer'});
      }
    }
  });
  return Devourer;
};