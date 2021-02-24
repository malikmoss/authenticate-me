'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    photoId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: 'authorId'});
    Comment.belongsTo(models.Photo, {foreignKey: 'photoId'})
  };
  return Comment;
};