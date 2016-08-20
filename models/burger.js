'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};
// How sequelize migrations work: http://gregtrowbridge.com/getting-started-with-sequelize-and-the-sequelize-cli/
// But I ran into below issues 
// below will create models/burger.js and migrations/20160818153359-create-burger.js
// [aypmacpro]$:sequelize model:create --name Burger --attributes 'burger_name:string, devoured:boolean, date:timestamp'
// [aypmacpro]$:sequelize db:migrate  //will fail with error. This due to date:timestamp 
// which I changed to date:date in burger.js 
// == 20160818153359-create-burger: migrating =======
// TypeError: Cannot read property 'toString' of undefined

// [aypmacpro]$:sequelize db:migrate
// == 20160818153359-create-burger: migrating =======
// == 20160818153359-create-burger: migrated (0.170s)

// [aypmacpro]$:sequelize migration:create --name 'devoured-default'
// Edit 20160818155538-20160818155538-devoured-default.js
// Add return queryInterface.changeColumn('Burgers', 'devoured',{defaultValue: 0})
// [aypmacpro]$:sequelize db:migrate:undo   //This will undo previous migration
