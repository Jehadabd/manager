const models = require('../models')
exports.create = async (req, res) => {
    const { name, description, category } = req.body
    const startDate = new Date(req.body.startDate)
    const endDate = new Date(req.body.endDate)


    try {
        if (startDate < endDate) {
            if(category=='low'||category=='high'||category=='middle'){
            const user = await models.User.findByPk(req.currentUser.id)
            if (user.title == 'manager') {
                const project = await models.Project.create({
                    name: name,
                    UserId: req.currentUser.id,
                    description: description,
                    startDate: startDate,
                    endDate: endDate,
                    category: category,
                    

                })
                res.status(200).json({
                    message: project
                })
            }
            else {
                res.status(200).json({
                    message: 'you are not manager'
                })
            }
        }
        else{
            res.status(500).json({

                message:'the date is false'
            });
        }}
        else{
            res.status(500).json({

                message:'the category is false'
            });
        }

    } catch (error) {
        res.status(500).json({

            error: error.message
        });
    }
}
exports.delete = async (req, res) => {
    try {
        
        const project = await models.Project.findOne({ where: { id: req.params.id } })
        if (req.currentUser.id == project.UserId) {
            project.destroy()
            project.save()
            res.status(200).json({
                message: 'this project is delete'
            })
        }
        else {
            res.status(200).json({
                message: 'you have not this project'
            })
        }
    } catch (error) {
        res.status(500).json({

            error: error.message
        });
    }
}
exports.get=async(req,res)=>{
try {
    
    const project=await models.Project.findAll({where:{category:'low'}})
    const project1=await models.Project.findAll({where:{category:'middle'}})
    const project2=await models.Project.findAll({where:{category:'high'}})
    res.status(200).json(project2,project1,project)
} catch (error) {
    res.status(500).json({

        error: error.message
    });
}
}