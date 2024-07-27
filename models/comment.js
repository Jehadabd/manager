const { DataTypes } = require('sequelize');

const db=require('./db')

const Comment = db.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Comment.associate=module=>{
    Comment.belongsTo(module.User)
    Comment.belongsTo(module.Task)
 
}

module.exports = Comment;