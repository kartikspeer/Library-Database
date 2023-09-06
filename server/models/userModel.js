import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        required:true
    },
    name: {
        type:String,
        required: true
    },
    username: {
        type: String,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type: String,
        required:true
    }
})

//generating hashed password
// UserSchema.pre('save', async function (next){
//     try{
//         const salt = await bcrypt.genSalt(10);
//         const hashedPass = await bcrypt.hash(this.password,salt);
//         this.password = hashedPass;
//         next();
//     }catch(err){
//         next(err);
//         console.log("error while hashing: "+err);
//     }   
// })

const User = mongoose.model('User',UserSchema);

export default User;