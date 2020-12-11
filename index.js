const express = require('express'),
    app = express() 
     app.use(express.static('pic'));

 app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
    

 })
app.get('/details',(req,res)=>{
    res.send(req.query.name +" - " + req.query.pass)
 })
app.listen(3000,()=>{
    console.log("App started");
})