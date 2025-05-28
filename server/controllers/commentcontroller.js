const expressAsyncHandler = require("express-async-handler")
const  Comment =require('../model/commentmodel')


const getallcomment=expressAsyncHandler(async(req,res)=>{
  console.log(req.params.id)
const allcomment= await Comment.find({booking:req.params.id}).populate('user').populate('booking')
console.log(allcomment)
if(!allcomment){
  res.status(400)
  throw new Error( 'commnet not  found')
}
res.status(200).json(allcomment)
})


const addcomment=expressAsyncHandler(async(req,res)=>{

  // console.log(req.body)
  // console.log(req.params)
  // console.log(req.user.id)
    if(!req.body.text){
        res.status(400)
        throw new Error('please flii to all  detali')
    }
    const comment= await Comment.create({
       
        user:req.user.id,
        booking:req.params.id,
        text:req.body.text
    })

const   commentadd =await Comment.findById(comment._id).populate('user').populate('booking')

    if(!comment){
        res.status(400)
        throw new Error('comment not add ')
    }
    else{
      res.status(201).json(commentadd)
    }
},



)

module.exports={getallcomment,addcomment}





