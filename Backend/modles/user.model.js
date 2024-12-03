const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type:String,
            minlength:[3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique: true,
        minlength:[5, 'First name must be at least 3 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false, // jab bhi aap user ko select kroge to ye password nhai jaayega 
    },
    socketId:{ //socketId ka hum aaage use krne waale hai for live tracking, yaani user ya driver ki tracking kr shake 
        firstname:{
            type:String,
        }
    },
})


//////////////////////////////////// ab hum yha pr khuch methods generate krenge  ya bna lenge 
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET) //is token ke ander data sirf user ki id rhene wali hai
    return token; // aur fir ye token yha se return kr dega jisko yha se khai bhi aage use kr shakte hai user.controller.js vgera me 
}


userSchema.methods.comparePassword = async function(password){
return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
