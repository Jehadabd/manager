const {Sequelize,DataTypes}=require('sequelize')
const db=require('./db')
const User=db.define('User',{
    name:{
        type: DataTypes.STRING,

    },
    email:{
        type: DataTypes.STRING,
        unique: true,

    },password:{
        type: DataTypes.STRING,

    },
    title:{
    type:DataTypes.STRING
        
    }
})
User.associate = models => {
    User.hasMany(models.Project)
    User.hasMany(models.Task)
    User.hasMany(models.Task,{as:'TeamMember'})
  
   
    
}


module.exports=User