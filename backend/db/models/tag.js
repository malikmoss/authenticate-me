'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Photo, {foreignKey: 'tagId', through: 'photo_tags', otherKey: 'photoId'});
  };
  return Tag;
};