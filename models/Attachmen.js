const { DataTypes } = require('sequelize');
const db =require('./db')

const Attachment = db.define('Attachment', {
  ulr: {
    type: DataTypes.STRING,
    allowNull: false
  },

});

Attachment.associate=module=>{
    Attachment.belongsTo(module.Task)
    Attachment.belongsTo(module.User)
}

module.exports = Attachment;