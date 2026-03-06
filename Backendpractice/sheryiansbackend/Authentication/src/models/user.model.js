const mongoose=require('mongoose')

const userSchems =new mongoose.Schema({
    username:string,
    email: String,
    password:String
})

const userModel= mongoose.model("user",userSchema)

module.exports = userModel