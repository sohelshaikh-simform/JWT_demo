const express=require("express")
const router=express.Router();
const userController=require("../controller/user")
const auth=require("../middlewares/auth")

router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/getdata",auth,userController.getData);

module.exports=router;