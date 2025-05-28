const jwt =require('jsonwebtoken')
const Auth=require('../model/authmodels')
const expressAsyncHandler = require('express-async-handler')

const   protect =expressAsyncHandler(async(req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
    
    }
    let token
    
    try {
     token = req.headers.authorization.split(' ')[1]
     const  decode = jwt.verify(token,process.env.JWT_SECRET)
    //  console.log(decode)
    req.user= await Auth.findById(decode.id)
    //  console.log(req.user)
     next()
    } catch (error) {
        res.status(400)
        throw new Error('invalid token : access denied')
    }
    
    // else{
    //     res.status(400)
    //     throw new Error('invalid token : access denied')
    // }
    })
module.exports=protect