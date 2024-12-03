const userModel = require("../modles/user.model")
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

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