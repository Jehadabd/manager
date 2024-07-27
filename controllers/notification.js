const models = require('../models')
exports.getMy=async(req,res)=>{
    try {
        const notification= await models.Notification.findAll({where:{UserId:req.currentUser.id}})
        res.status(200).json(notification)
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });  
    }
}
exports.getCount=async(req,res)=>{
    try {
        const notification= await models.Notification.findAll({where:{UserId:req.currentUser.id,read:false}})
        res.status(200).json(notification.length)
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });  
    }
}
exports.show=async(req,res)=>{
    try {
        const notification= await models.Notification.findOne({where:{id:req.params.id,UserId:req.currentUser.id}})
        notification.read=true
        notification.save()
        res.status(200).json(notification)
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });  
    }
}