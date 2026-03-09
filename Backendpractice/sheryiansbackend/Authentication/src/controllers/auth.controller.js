const userModel = require ("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



async function registerUser(req,res){
    const {username, email, password} = req.body;

        const hash = await bcrypt.hash(password,10);




    const user=await userModel.create({
        username, email, password
    })

    const token= jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET)

    res.status(201).json({
        message:"user registered successfully",
        user,
        token
    })
    





}



module.exports={registerUser}

