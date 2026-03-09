const userModel = require ("../models/user.model");


async function registerUser(req,res){
    const {username, email, password} = req.body;



    const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

}



module.exports={registerUser}

