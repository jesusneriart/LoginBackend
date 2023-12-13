const express = require('express');

const app = express();

//routes

app.get('/auth',async (req,res)=>{
    console.log(req.query)
    res.send("Hello World , It is " + Date.now());
})

const port = 13576;
app.listen(port, ()=>{
    console.log("LISTENING ON " + port)
})