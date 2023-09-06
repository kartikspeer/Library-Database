import  Express  from "express"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
const router = Express.Router();

router.post("/signup",async(req,res)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save();
        console.log("signup successful!")
        return res.status(200).json({msg:'success'})
    }catch(err){
        console.log("signup error! "+err)
        return res.status(500).json({msg:'failed'})
    }
});

router.post("/login",async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({msg:'missing field'})
        }
        const userData = await User.findOne({username:username, password:password})
        if(!userData){
            console.log("user data not found!")
            res.status(500).json({msg:'login error'})
        }
        else{
            console.log(userData);
            const accessToken = jwt.sign({username: username},"secretKey")
            console.log(accessToken);
            res.status(200).json({accessToken: accessToken})
        }
    }catch(err){
        console.log("error detected at login post: "+err)
        return res.status(500).json({msg:'failed'})
    }
})

router.get("/admin",async(req,res)=>{
    res.json({msg:"hi!"})
})



export default router