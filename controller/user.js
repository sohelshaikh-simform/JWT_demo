// const user = require("../models/user");
const userModel=require("../models/user")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");


const register=async (req,res)=>{
    try{
        const existUser= await userModel.findOne({email:req.body.email});
        if(existUser){
            res.status(400).json({message:"user Already exit"});
        }
        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(req.body.password, salt);
        const newUser= await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hasPassword
        })
        const token=jwt.sign({email:newUser.email,id:newUser._id},"secretkey")
        res.status(201).json({
            user:newUser,
            token:token
        })
    }
    catch(err){
        console.log(err);
    }
   
}
const login=async (req,res)=>{
    try{
        const existUser= await userModel.findOne({email:req.body.email});
        if(!existUser){
           return res.status(404).json({message:"User not Found"});
        }
        const matchPassword= await bcrypt.compare(req.body.password,existUser.password);
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credential"});
        }
        const token=jwt.sign({email:existUser.email,id:existUser._id},"secretkey")
        return res.status(201).json({user:existUser,token:token});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"something wrong"});
    }
}

const getData=(req,res)=>{
    console.log(req.userId);
    res.status(200).json({message:"Sucees",id:req.userId})
}
module.exports={register,login,getData}