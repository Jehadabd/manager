
const models = require('../models')
exports.create=async(req,res)=>{
  
        const {name,description,id}=req.body
        const data= new Date(req.body.deadline)
        
        try {
            if(data>=Date.now()){
            const user=await models.User.findOne({where:{id:id}})
            console.log(user)
            if(user.title=='normal user'||'normal'){
                 const task =await models.Task.create({
                    name:name,
                    description:description,
                    TeamMemberId:user.id,
                    UserId:req.currentUser.id,
                    ProjectId:req.params.id,
                    isCompleted:false,
                    deadline:data

                 })
                 res.status(200).json(task)
            }
            else{
                res.status(500).json({
                    message:'the user is not normal user'
                })
            }}
            else{
                res.status(500).json({
                    message:'the date is false'
                })
            }
            
        } catch (error) {
            res.status(500).json({
           
                error: error.message
            });
        }
}
exports.getMyTask=async (req,res)=>{
    
    try {
        const user=await models.Task.findAll({where:{TeamMemberId:req.currentUser.id}})
         if(user==null){
            res.status(404).json({
                message:"you don't have Task"
            })
         }
         else{
            res.status(200).json(user)
         }
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });
    }
}
exports.doneTask=async(req,res)=>{
 try {
    const task=await models.Task.findOne({where:{id:req.params.id}})
    task.isCompleted=true
    task.save()
    const user=await models.User.findByPk(req.currentUser.id)
    const Notification=await models.Notification.create({
        message:` member ${user.name}  ${req.currentUser.id} completed this task`,
        read:false,
       
        UserId:task.UserId,
        TaskId:task.id,

    })
    
    res.status(200).json({
        message1:'the task is done',
        message:task
    })

 } catch (error) {
    res.status(500).json({
           
        error: error.message
    }); 
 }
}
