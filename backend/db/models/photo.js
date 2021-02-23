'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photoURL: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};