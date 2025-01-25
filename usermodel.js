const mongoose=require( 'mongoose');
const { string } = require('zod');



mongoose.connect('mongodb+srv://mittalpragat:mittal%402024@cluster0.wu2rf.mongodb.net/');

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})

module.exports=mongoose.model("user",userSchema);

