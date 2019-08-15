'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temp = sequelize.define('Temp', {
    temp: DataTypes.STRING
  }, {});
  Temp.associate = function(models) {
    // associations can be defined here
  };
  return Temp;
};