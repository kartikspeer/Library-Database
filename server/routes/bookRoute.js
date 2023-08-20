import Express from "express";
import NewBooks from "../models/bookModel.js";
import authenticateToken from "./authRoute.js";

const router = Express.Router();

router.get("/books",authenticateToken, async (req,res)=>{
    console.log(NewBooks)
    const data = await NewBooks.find();
    // console.log(data)
    return res.json(data);
});

router.post("/books/create", async(req,res)=>{
    console.log(req.body)
    const {title,author,publication,copiesLeft} = req.body
    const data = await NewBooks.create({title,author,publication,copiesLeft})
    res.json(data)
});

export default router;