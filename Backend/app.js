const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser')
const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/user.routes');
const app = express();
const connectToDb = require('./db/db');

connectToDb()

app.use(cors()); //abi ke liye hum saari website se request accept kr rhae honge , lekin sirf dovlopment ke time me , jub hum production me jayenge to hume cors me sirf specific domain se request accept krenge iske alava aap saari cheejo ko block kroge 


///ye do lines route ko configre krne ke liye use ki jaati hai jese ki app.use('/users', userRoutes) ke liye, aur naaki ke liye bhi 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get('/', (req, res)=>{
    res.send('Hello world')
})
app.use('/users', userRoutes)


module.exports = app;