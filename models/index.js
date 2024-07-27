const db=require('./db')
const Attachmen=require('./Attachmen')
const Comment=require('./comment')
const Event=require('./event')
const Notification=require('./notification')
const Project=require('./project')
const Task=require('./task')
const TaskAssignee=require('./TaskAssignee')
const User=require('./user')
const models={
    Attachmen:Attachmen,
    Comment:Comment,
    Event:Event,
    Notification:Notification,
    Project:Project,
    Task:Task,
    
    User:User
}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(models);
    }
});

db.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => console.log('Error creating database & tables: ', err));

module.exports = models;