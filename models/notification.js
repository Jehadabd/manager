const { DataTypes } = require('sequelize');
const db=require('./db')
const Notification = db.define('Notification', {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
Notification.associate=module=>{
    Notification.belongsTo(module.User)
    Notification.belongsTo(module.Task)
}

module.exports = Notification;