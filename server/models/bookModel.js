import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        requrired: true
    },
    author:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    },
    copiesLeft:{
        type:Number,
        required:true
    }
})

const NewBooks = mongoose.model('NewBook',bookSchema)
export default NewBooks