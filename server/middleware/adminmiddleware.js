import User from "../models/userModel.js";
const adminmiddleware = async (req,res,next)=>{
    try {
        console.log(req.body)
        const user = await User.findOne({_id:req.body.userId});
        console.log(user)
        //check admin
        if (user?.role !== "admin") {
            return res.status(401).send({
            success: false,
            message: "AUth Failed",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "Auth Failed, ADMIN API",
            error,
        });
    }
};

export default adminmiddleware;