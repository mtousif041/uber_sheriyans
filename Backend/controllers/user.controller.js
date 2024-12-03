const userModel = require("../modles/user.model")
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const BlacklistTokenModel = require('../modles/blacklistToken.model')
const blacklistTokenModel = require("../modles/blacklistToken.model")


////////////////////////controller for register
module.exports.registerUser = async(req, res, next)=>{
  const errors = validationResult(req); // user.routes.js me humne jo bhi validation lgaye the agr unme se khuch bhi galat hoga to vo        humko is req(request) me mil jaayega

  if(!errors.isEmpty()){// yaani ki agr firstnamae, email, password in theeno me se khuch galat aarha hai to vo message me aapko mil jaayega 
    return res.status(400).json({errors:errors.array()})
  }

//   console.log(req.body);
  

//   const {firstname, lastname, email, password} = req.body;
// ye jo firstname aur lastname ye ek object ki form me aarhe hai jiski vajha se error aarha haai , islie hum uper waali line ko aise likh  dhenge 
const {fullname, email, password} = req.body;
// aur fir niche bhi direct firstname, lastname, dene ki bjaye aise dhenge  firstname: fullname.firstname, lastname:fullname.lastname,


const isUserAlreadyExist = await userModel.findOne({email})// yaani check krenge ki is email se koi captain already register to nhai haina 

   if(isUserAlreadyExist){
    return res.status(400).json({message:'user already exist'})
   }


  
  const hashedPassword = await userModel.hashPassword(password) // ye user.model.js ke hashPassword method ko use kr rha hai yha pr fir password ko hashed kr rha hai , jisse aapko hashed password mil jaayega 


  // ab iske baad aaki jo user.service.js ke ander jo createUser hai usko aap yha se call krke user ko create kr shakte ho
  const user = await userService.createUser({
    // firstname,
    // lastname,
    firstname: fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashedPassword
  });


  //ab ye jo user create hoga isse hume ek token generate kr vana hai , jsike liye humne already ek methd likh rhakaha hai user.model.js me 
  const token = user.generateAuthToken()

  res.status(201).json({
    token,
    user,

  })


}


///////////////////////////////controller for login
module.exports.loginUser = async(req, res, next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  const {email, password} =  req.body;

  const user = await userModel.findOne({email}).select('+password') // passord ko humne model me select false krdiya tha isliye ab isko wapas se + krna pdega


  if(!user){
    return res.status(401).json({message:'Invalid email or password'});
  }

  const isMatch = await user.comparePassword(password);
    
  if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
  }

  const token = user.generateAuthToken();

  res.cookie('token', token)

  res.status(200).json({token, user});

}



//////////////////////////////////controller for get user profile
module.exports.getUserProfile = async(req, res, next)=>{
  res.status(200).json(req.user);// jo req.user humne middleware me set kiya hoga vo chala jaayega as a response aapki profile pe 
}

// for logout
module.exports.logoutUser = async(req, res, next)=>{
  //cookie to hum clear krenge hi krenge ,lekin saath me is token ko bhi clear kr dhenge 
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];
  
  res.clearCookie('token');
  
  await blacklistTokenModel.create({token})

  res.status(200).json({message:"Logged Out"})
}