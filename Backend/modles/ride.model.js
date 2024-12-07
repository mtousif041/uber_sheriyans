const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema({
    user:{ // yaani ki kis particular user ne is ride ko book kiya hai ya create kiya hai 
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    captain:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'Captain',
        
    },
    pickup:{ 
        type: String,
        required: true
    },
    destination:{ 
        type: String,
        required: true
    },
    fare:{ 
        type: Number,
        required: true
    },
    status:{ 
        type: String,
        enum:['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default:"pending",
    },
    duration:{ 
        type: Number, //in seconds

    },
    distance:{ 
        type: Number, // in meters
    },
    paymentID:{ 
        type: String, //for payment verify
        
    },
    orderID:{ 
        type: String,//for payment verify
        
    },
    signature:{ 
        type: String,//for payment verify
        
    },
    otp:{ 
        type: String,
        select: false,
        required:true
        
    },

})






module.exports = mongoose.model('ride', rideSchema);
