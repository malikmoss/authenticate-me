'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Album;
};