const express = require('express');
const keys = require('./config/key.js')

const app = express();

//setting DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);

//setup db models
require('./model/Account')

//setup the routes
require('./routes/authenticationRoutes')(app)




app.listen(keys.port, ()=>{
    console.log("LISTENING ON " + keys.port)
})