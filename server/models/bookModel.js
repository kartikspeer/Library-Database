import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    publication:String,
    copiesLeft:Number
})

const NewBooks = mongoose.model('NewBook',bookSchema)
export default NewBooks