
const Auth = require('../model/authmodels')
const  bcrypt =require ('bcryptjs')
const expressAsyncHandler = require('express-async-handler')

const jwt =require('jsonwebtoken')





const authregister=expressAsyncHandler(async(req,res)=>{
    const {name,password,email,phone}=req.body
    
    
    if(!name||!password||!email||!phone){
        res.status(400)
        throw new Error('please fill all details')
    }
    
    
    // check this user allready exists

    const emaillExist = await Auth.findOne({email:email})
    const phoneExist = await Auth.findOne({phone:phone})

    if(emaillExist||phoneExist){
        res.status(400)
        throw new Error("user already exist")
    }



    const salt= bcrypt.genSaltSync(10)
    const hashedpassword =bcrypt.hashSync(password,salt)
     
    const user = await Auth.create({name,password:hashedpassword ,email,phone})
    if(!user){
        res.status(400)
    throw new Error('user not create')
    }

  else{
    res.status(201).json({
id:user._id,
name:user.name,
password:user.password,
email:user.email,
token: generateToke(user._id)
, memberSince:user.createAt })

}

    }
    )


const authlogin=expressAsyncHandler(async(req,res)=>{
    const {email, password}=req.body
    if(!email || !password){
        res.status(400)
        throw new Error('please fill all details') 
    }


    // check this email end password

    const user = await Auth.findOne({email:email})
 
    // console.log(user)
    if(user && bcrypt.compareSync(password,user.password)){
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            isadmin:user.isadmin,
            token: generateToke(user._id),
            memberSince:user.createdAt
        })
    }
    else{
        res.status(401)
        throw new Error('invalid credentaiols')
    }
    res.send('user Login')
})

// const updateUser = expressAsyncHandler(async (req, res) => {
//     const { id, name, email } = req.body;

//     // Pehle user exist karta hai ya nahi, check karte hain
//     const existingUser = await Auth.findById(id);

//     if (!existingUser) {
//         res.status(404);
//         throw new Error('User not found or not registered');
//     }

//     // Ab user ko update karte hain
//     const updatedUser = await Auth.findByIdAndUpdate(
    
//         { name, email },
//         { new: true } // new:true se updated document return hota hai
//     );

//     if (updatedUser) {
//         res.status(200).json(updatedUser);
//     } else {
//         res.status(400).json({ message: "Failed to update user" });
//     }
// });

    

const updateUser = expressAsyncHandler(async (req, res) => {
    try {
      const { _id, name, email } = req.body;
  
      if (!_id || !name || !email) {
        res.status(400);
        throw new Error('All fields are required');
      }
  
      const existingUser = await Auth.findById(_id);
  
      if (!existingUser) {
        res.status(404);
        throw new Error('User not found or not registered');
      }
  
      const updatedUser = await Auth.findByIdAndUpdate(
        _id,
        { name, email },
        { new: true }
      );
  
      if (!updatedUser) {
        res.status(400);
        throw new Error('Failed to update user');
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Update User Error:', error.message);
      res.status(500).json({ message: error.message });
    }
  });
  


const  privateController = async(req,res)=>{
res.json('private controllar')
}

const  generateToke =(id)=>{
    return token= jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'
    })
}





module.exports={authregister,authlogin,privateController,updateUser}