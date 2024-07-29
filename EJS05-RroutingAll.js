var myexpress=require("express")
var app=myexpress()
var port=9000
app.get("/",(req,res)=>{
    res.send("Heloo from expressjs : neel")
})
app.listen(port,()=>{
    console.log("running on port number 9000")
})
app.get("/about",(req,res)=>{
    res.send("Heloo from about page expressjs : neel")
})
app.get("/contact",(req,res)=>{
    res.send("Heloo from contact page expressjs : neel")
})
app.get("/home",(req,res)=>{
    res.send("Heloo from home page expressjs : neel")
})
//http://localhost:9000/
//http://localhost:9000/about
//http://localhost:9000/contact
//http://localhost:9000/home