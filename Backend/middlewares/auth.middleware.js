const userModel = require('../modles/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// middleware bnana hai ki user authenticate hai ki nhai 
module.exports.authUser = async (req, res, next)=>{
    // dhekiye token aapko do jahga milta hai header ke ander aur cookies ke ander , hum dono hi jagaha chek krne wale hai 
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
       return res.status(401).json({message: 'Unauthorizedii'})
    }

    const isBlacklisted = await userModel.findOne({token: token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized due to black listed'})
    }

    //ab token to aapko mil jaayega to ab isko krna hai decrypt/decoded
     
    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);//userModel ke ander jab token create kr rhe te to data me sirf id hi dhai thi, to sirf utna hi data yaani id jab aap token ko decoded kroge to vo milega , yaani decoded se sirf id hi milegi knyki create krte time humne id hi di thi

        //fir jo bhi user aapko mila hoga usko set krna hoga req.user me 
        req.user = user;

        return next()
    } catch (err) {
        console.log("mohammed tousif");
        
        // console.log(err);
        return res.status(401).json({message:'Unauthorizedd!'})
        
    }


}