const express=require("express")
const app=express()
const port=9000
app.use(express.json())
app.post("/user",(req,res)=>{
    res.send(`Hello ${req.body.name}`)
});
app.listen(port,()=>{
    console.log("server running at port nom: 9000")
})
