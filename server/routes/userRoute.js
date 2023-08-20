import  Express  from "express"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import authenticateToken from "./authRoute.js"
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
        console.log(userData)
        if(!userData){
            console.log("user data not found!")
            res.status(500).json({msg:'login error'})
        }
        else{
            console.log(userData);
            //create token
            const accessToken = jwt.sign({userData},"secretKey")
            res.status(200).json({accessToken: accessToken})
            // return res.status(200).json({msg:'success'})
        }
    }catch(err){
        console.log("error detected at login post: "+err)
        return res.status(500).json({msg:'failed'})
    }
})

router.get("/admin",authenticateToken,async(req,res)=>{
    res.json({msg:"hi!"})
})



export default router