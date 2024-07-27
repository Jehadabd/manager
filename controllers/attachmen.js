const models = require('../models')
exports.add=async(req,res)=>{
   
    const userid=req.currentUser.id
    const taskid=req.params.id
    const url = req.protocol + '://' + req.get('host')
    try {
        
   
             await Promise.all(req.files.map(async (file) => {
                const attachmen= await models.Attachmen.create({
                    ulr: url + '/attachmen' + file.filename,
                    UserId:userid,
                    TaskId:taskid
                })
            }))
           
            res.status(200).json({
                message:'the file is insert'
            })
        
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });
    }
}
