import Express from "express";
import NewBooks from "../models/bookModel.js";

import authmiddleware from "../middleware/authmiddleware.js"

const router = Express.Router();

router.get("/search",authmiddleware, async (req,res)=>{
    const data = await NewBooks.find();
    return res.json(data);
});

router.delete("/delete/:id",async(req, res)=>{
    try{
        await NewBooks.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            message: "record deleted successfully!"
        });
    }catch(err){
        console.log(error);
        return res.status(500).send({
            message: "failed to delete record!"
        });
    }
});

router.post("update",async (req,res)=>{
    
});

router.post("/add", authmiddleware, async(req,res)=>{
    console.log(req.body);
    try{
        const data = NewBooks(req.body);
        await data.save();
        return res.status(200).json({msg:"book added suucess!"});
    }catch(err){
        return res.status(500).json({msg:'book add failed',err});
    }
});

export default router;