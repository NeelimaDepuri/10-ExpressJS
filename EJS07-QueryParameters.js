var express=require("express")
var app=express()
var port=9000
app.get("/search",(req,res)=>{
    const query=req.query.q
    res.send("Search query : "+query)
})
app.listen(port,()=>{
    console.log("running on port number 9000")
})
//http://localhost:9000/search?q=hiii