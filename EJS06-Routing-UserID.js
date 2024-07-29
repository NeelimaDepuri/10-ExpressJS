var express=require("express")
var app=express()
var port=9000
app.get("/user/:id",(req,res)=>{
    res.send("User Id : "+req.params.id)
})
app.listen(port,()=>{
    console.log("running on port number 9000")
})
//http://localhost:9000/user/911