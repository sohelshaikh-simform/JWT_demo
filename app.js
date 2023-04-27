const express = require("express");
const fs=require('fs')
const app = express();
const jwt = require("jsonwebtoken");
const dotenv=require('dotenv');
const { default: mongoose } = require("mongoose");

const userRouter=require("./route/user")
dotenv.config();
app.use(express.json())

app.use("/",userRouter);
// const posts = [

//   {
//     username: "abc",
//     password:"abc",
//     email:"abc.gmail.com"
//   },
//   {
//     username: "def",
//     password:"def"
//   },

// ];
// // const post=fs.readFile()

// // app.

// // app.get("/post",authenticateToken,(req, res) => {
// //     console.log(req.user)
// //   res.json(posts.find(post=>post.username === req.user.name));
// // });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
//   const user = { name: username };

//   const accesstoken = jwt.sign(user, "secretkey");
//   res.json({
//     accesstoken: accesstoken,
//   });
// });

// function authenticateToken(req,res,next){
//     const authHeader=req.headers['authorization'];
//     const token=authHeader && authHeader.split(' ')[1]
//     console.log(token)
//     if(token==null) return res.sendStatus(403);

//     jwt.verify(token,"secretkey",(err,user)=>{
//         if(err) return res.sendStatus(404);
//         console.log(user);
//         req.user=user;
//         next()
//     })
// }
// app.listen(5000, () => {
//   console.log("app is running on port 5000");
// }); 

mongoose.connect("mongodb://localhost:27017/sh",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(

app.listen(6000, () => {
  console.log("app is running on port 6000");
})
  ).catch(err=>console.log(err));