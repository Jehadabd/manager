const { DataTypes } = require('sequelize');
const db=require('./db')

const Event = db.define('Event', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eventType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Event.associate=module=>{
    Event.belongsTo(module.Project)
    Event.belongsTo(module.User)
}

module.exports = Event;