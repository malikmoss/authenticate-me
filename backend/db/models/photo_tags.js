'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo_Tags = sequelize.define('Photo_Tags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo_Tags.associate = function(models) {
    // associations can be defined here
    Photo_Tags.belongsTo(models.Tag, {foreignKey: 'tagId'});
    Photo_Tags.belongsTo(models.Photo, {foreignKey: 'photoId'});
  };
  return Photo_Tags;
};