// const express= require('express')
// const app =express()
// const path =require("path")
// require('dotenv').config()
// const colors =require('colors')
// const DBconntion = require('./config/db_config')
// const errorHandler = require('./middliewer/errorHandier')
// // const { privateController } = require('./controllers/authControllers')
// const PORT= process.env.PORT 


// // app.get('/',(req,res)=>{
// // res.json({
// //     message:'influencer 2.4'
// // })
// // })


// //database connect 
// DBconntion()
     

// //body parser


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


// if(process.env.NODE_ENV==="production"){
//   const  __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname,"/client/dist")));
//   app.get("*",(req,res)=>
//     res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
//   )
// }
// else{
//   const __dirname=path.resolve();
//   app.get("/",(req,res)=>{
//     res.send("influencer api runinng......")
//   })
// }




// app.use('/api/auth/',require("./routers/authrouter"))
// app.use('/api/admin',require('./routers/adminrouter'))
// app.use('/api/bookings',require('./routers/bookingrouter'))
// app.use('/api/influencer',require('./routers/influencersrouter'))






// app.use(errorHandler)
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`.bgBlue); 
// });


const express = require('express');
const app = express();
const path = require("path");
require('dotenv').config();
const colors = require('colors');
const DBconntion = require('./config/db_config');
const errorHandler = require('./middliewer/errorHandier');
const PORT = process.env.PORT;
const cors = require('cors');

// Connect DB
DBconntion();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API routes (should come before production block)
app.use(cors());
app.use('/api/auth', require("./routers/authrouter"));
app.use('/api/admin', require('./routers/adminrouter'));
app.use('/api/bookings', require('./routers/bookingrouter'));
app.use('/api/influencer', require('./routers/influencersrouter'));
app.use(cors({
  origin: 'https://your-frontend.vercel.app'  // ← Vercel की domain डालें
}));

// ✅ Serve static files in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  // ✅ only handle frontend routes, skip /api
  app.get("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("influencer api running......");
  });
}

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgBlue);
});
