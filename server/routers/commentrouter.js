const express =require('express')
const { getallcomment, addcomment } = require('../controllers/commentcontroller')
const protect = require('../middliewer/authmiddliewer')
const router=express.Router({mergeParams:true})

 router.get('/', protect, getallcomment)
 router.post('/',protect ,addcomment)


 module.exports=router