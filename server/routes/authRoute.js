import  Express  from "express"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

function authenticateToken(req,res,next){
    const authHeader = req.headers.authorization
    // console.log(authHeader)
    console.log("hello i am auth func")
    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token,"secretKey",(err,userData)=>{
            if(err) res.status(403).json({msg:"invalid token"})
            req.userData = userData
            next()
        })
    }
    else{
        res.status(401).json({msg:"Not authenticated"})
    }
    return;
}

export default authenticateToken