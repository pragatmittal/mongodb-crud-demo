const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://mittalpragat:mittal%402024@cluster0.wu2rf.mongodb.net/")
const userSchema=mongoose.Schema({
    image:String,
    email:String,
    name:String
})
module.exports=mongoose.model ('user',userSchema)