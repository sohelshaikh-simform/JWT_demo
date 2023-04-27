const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
    try{
        let token=req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            let user=jwt.verify(token,"secretkey");
            req.userId=user.id;
        }
        else{
            return res.status(401).json({message:" token error"})
        }
        next();
    }
    catch(err){
        // console.log((err));
        res.status(401).json({message:"Unauthorize User"})
    }
}
module.exports=auth