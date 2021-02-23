'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo_Tags = sequelize.define('Photo_Tags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo_Tags.associate = function(models) {
    // associations can be defined here
  };
  return Photo_Tags;
};