const {Sequelize,DataTypes, BelongsToMany}=require('sequelize')
const db=require('./db')

const Task=db.define('Task',{
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING

    },
    deadline:{
        type:DataTypes.DATE

    },
    isCompleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }


})
Task.associate = models => {
   Task.belongsTo(models.Project)
   Task.belongsTo(models.User)
   Task.hasMany(models.Comment)
   Task.belongsTo(models.User,{as:'TeamMember'})
   
   

}





module.exports=Task