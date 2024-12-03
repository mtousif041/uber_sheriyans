const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors()); //abi ke liye hum saari website se request accept kr rhae honge , lekin sirf dovlopment ke time me , jub hum production me jayenge to hume cors me sirf specific domain se request accept krenge iske alava aap saari cheejo ko block kroge 






app.get('/', (req, res)=>{
    res.send('Hello world')
})

module.exports = app;