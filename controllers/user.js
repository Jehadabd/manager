const models = require('../models')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
exports.register = async (req, res) => {
  try{
    let titel;
   const {name,password,email}=req.body
   try {
    titel=req.body.titel
    if(titel==null){
     titel='normal user'
    }
   } catch (error) {
    
   
  
    title='normal user'
   }

   const hashedPassword = await bcrypt.hash(password, 10);

    const user=await models.User.create({
        password:hashedPassword,
        name:name,
        email:email,
        title:titel

    })
    res.status(200).json({
        message:user
    })
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }}
exports.login=async (req,res)=>{
    const { email,password}=req.body
    try {
        const user = await models.User.findOne({ where: { email: email } })
        if (user !== null) {
            if (bcrypt.compareSync(password, user.password)) {
                const token=jwt.sign({id:user.id,
                    email:user.email,password:user.password

                },process.env.JWT_SECRET)
                res.status(200).json({
                    accessToken: token
                })
            } else {
                res.status(401).json({
                    message: 'the password or email is wrong'
                })
            }
        } else {
            res.status(401).json({
                message: 'the password or email is wrong'
            })
        }
        
    } catch (error) {
        res.status(500).json({
           
            error: error.message
        });
    }
}