const {sequelize,DataTypes}=require('sequelize')
const db=require('./db')
const Project=db.define('Project',{
    name:{
        type: DataTypes.STRING,

    },
    description:{
        type: DataTypes.STRING,

    },
    startDate:{
        type:DataTypes.DATE
    },
    endDate:{
        type:DataTypes.DATE
    },
    category:{
        type: DataTypes.STRING,
        defaultValue:"low"

    }

})
Project.associate = models => {

    Project.belongsTo(models.User)
    Project.hasMany(models.Task)
}
module.exports=Project