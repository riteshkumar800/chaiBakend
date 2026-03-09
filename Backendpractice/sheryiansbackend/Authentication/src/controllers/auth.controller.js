const userModel = require ("../models/user.model");


async function registerUser(req,res){
    const {username, email, password} = req.body;



    const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    
    if(isUserAlreadyExists){
        return res.status(409).json({message:"user already exists"})
    }

    const hash = await bcrypt.hash(password, 10)





}



module.exports={registerUser}

