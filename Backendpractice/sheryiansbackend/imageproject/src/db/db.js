const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt-backend:PwHPiGym6dlTfE7a@yt-backend.pxeroak.mongodb.net/")
    console.log("connected to DB")


}

module.exports = connectDB