const models = require('../models')
exports.create= async (req,res) => {
       const content=req.body.content
       try {
        const comment=await models.Comment.create({
            content:content,UserId:req.currentUser.id,TaskId:req.params.id
        })
        res.status(200).json(comment)
       } catch (error) {
        res.status(500).json({
           
            error: error.message
        });
       }
}