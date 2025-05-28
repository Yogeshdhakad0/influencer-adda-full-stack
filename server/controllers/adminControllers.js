const expressAsyncHandler = require("express-async-handler")
const Influencer =require('../model/adminmodel')
const Booking= require('../model/bookingmodel')
const Auth =require('../model/authmodels')
const Comment =require('../model/commentmodel')

const  createinfluencer= expressAsyncHandler(async(req,res)=>{
const {name,niche,followers,instagram_headle,rate,location,profliepic,gender}=req.body
if(!name||!niche||!followers||!instagram_headle||!rate||!location||!profliepic||!gender){
res.status(400)
throw new Error('please flil to all detalis')
}

const influnecers= await Influencer.findOne({instagram_headle})
if(influnecers){
    res.status(400)
    throw new Error('influencer already exists')
}
 


//create influencers 

const  newinflunecer= await Influencer.create({name,niche,followers,instagram_headle,rate,location,profliepic,gender})


if(newinflunecer){
    res.status(201)
    res.json({
        name,niche,followers,instagram_headle,rate,location,profliepic,gender
    })
}
else{
    res.status(400)
    throw new Error('influencers not create')
}




})






const  updateinfluencer= expressAsyncHandler(async(req,res)=>{
    const updateinflunecr = await Influencer.findByIdAndUpdate(req.params.id,req.body, {new :true})
  if(!updateinflunecr){
      res.status(400)
      throw new Error(' influencer not found!')
  }
  res.status(200).json(updateinflunecr)
  

  })

const  removeinfluencer= async(req,res)=>{
await Influencer.findByIdAndDelete(req.params.id)
res.status(201).json({
    id:req.params.id,
    message:'delete influnencer'
})
}



const  getallbookindinfluencer= expressAsyncHandler(async(req,res)=>{

    const bookingsList = await Booking.find().populate('user').populate('influencer')
   
    if(!bookingsList){
        res.status(400)
        throw new Error('booking not found!')
    }
    res.status(200).json(bookingsList)
}
)



// const  updatebookingindinfluencer= expressAsyncHandler(async(req,res)=>{
//    const updateBooking= await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('user').populate('influencer')

//    if(!updateBooking){
//     res.status(400)
//     throw new Error(' booking  not update')
//    }

// console.log(req.body)
// if(req.body.status==="rejected"){
//    await Influencer.findByIdAndUpdate(updateBooking.influnecers_id,{isactive:true},{new:true})
// }





// res.status(200).json(updateBooking)

// })





const updatebookingindinfluencer = expressAsyncHandler(async (req, res) => {
    const updateBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    ).populate('user').populate('influencer');

    if (!updateBooking) {
        res.status(400);
        throw new Error('Booking not updated');
    }

    console.log(req.body);

    if (req.body.status === "rejected") {
        // ✅ Correct way to update influencer
        if (updateBooking.influencer && updateBooking.influencer._id) {
            await Influencer.findByIdAndUpdate(updateBooking.influencer._id, { isactive: true }, { new: true });
        }
    }

    res.status(200).json(updateBooking);
});


const getalluser=expressAsyncHandler(async(req,res)=>{
    const alluser= await Auth.find().select("-password")
    // console.log(alluser)
    if(!alluser){
        res.status(404)
        throw new Error('user not found')
    }
    res.status(200).json(alluser)
 
})


const getallcomment=expressAsyncHandler(async(_,res)=>{
  const allcomment = await Comment.find()    .populate('user') // user details
  .populate({
    path: 'booking',
    populate: {
      path: 'influencer', // influencer inside booking
      model: 'Influencer' // make sure this matches your model name
    }
  
   
})
 
    if(!allcomment){
        res.status(404)
        throw new Error('comment not found')
    }
    res.status(200).json(allcomment)
 
})



 module.exports={createinfluencer,updateinfluencer,removeinfluencer,getallbookindinfluencer,updatebookingindinfluencer ,getalluser ,getallcomment}