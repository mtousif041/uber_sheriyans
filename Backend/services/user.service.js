const userModel = require('../modles/user.model')


///////function user ko create krne ke liye 
module.exports.createUser = async({firstname, lastname, email, password})=>{
   if(!firstname || !email || !password){
    throw new Error('All fields are required')
   }

   const user = userModel.create({
    fullname:{
        firstname,
        lastname,
    },
    email,
    password// ye password hash me convert krke bhejna hai aage se hi hai 
        
   })

   return user;
}