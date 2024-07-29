var express=require("express")
var app=express()
var port=9000
app.get("/",(req,res)=>{
    res.send("Heloo from expressjs : neel")
})
app.listen(port,()=>{
    console.log("running on port number 9000")
})
//localhost:9000/