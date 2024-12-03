const captainModel = require('../modles/captain.model')
const captainService= require('../services/captain.service')
const {validationResult} = require('express-validator')
const blackListTokenModel = require('../modles/blacklistToken.model')


module.exports.registerCaptain = async (req, res, next)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
   }

   const {fullname, email, password, vehicle} = req.body;

   const isCaptainAlreadyExist = await captainModel.findOne({email})// yaani check krenge ki is email se koi captain already register to nhai haina 

   if(isCaptainAlreadyExist){
    return res.status(400).json({message:'Captain already exist'})
   }

   const hashedPassword = await captainModel.hashPassword(password)

   const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType,
   });

   const token = captain.generateAuthToken();

   res.status(201).json({token, captain});
}


//for captain login 
module.exports.loginCaptain = async(req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'})
    }

    //ab hum generate krenge token 
    const token = captain.generateAuthToken()
    
    res.cookie('token', token); //yha pr hum cookie set krenge browser me 

    res.status(200).json({token, captain}) //yha se hum token aur captain dono ko hi bhej dhenge 

}



/// for get getCaptainProfile
module.exports.getCaptainProfile = async(req, res, next)=>{
    res.status(200).json({captain: req.captain})
}



//for logout captain 
module.exports.logoutCaptain = async(req, res, next)=>{
    //cookie to hum clear krenge hi krenge ,lekin saath me is token ko bhi clear kr dhenge 
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await blackListTokenModel.create({token})
    
    res.clearCookie('token');
  
    res.status(200).json({message:"Logged Out"})
}