const models = require('../models')
exports.create=async(req,res)=>{
    try {
        const {description,eventType}=req.body
        const user=await models.User.findByPk(req.currentUser.id)
        if(user.title=='manager'){
            
            const Event=await models.Event.create({
                UserId:req.currentUser.id,
                ProjectId:req.params.id,
                description:description,
                eventType:eventType

            })
        res.status(200).json(Event)

        }
        else{
            res.status(500).json({
                message:'you are not manager'
            })
        }
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });
    }
}