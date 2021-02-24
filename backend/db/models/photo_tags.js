'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo_Tags = sequelize.define('Photo_Tags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo_Tags.associate = function(models) {
    // associations can be defined here
    Photo_Tags.belongsToMany(models.Photos, {foreignKey: 'photoId'});
    Photo_Tags.belongsToMany(models.Tags, {foreignKey: 'tag'});
  };
  return Photo_Tags;
};