const express=require("express")
const app=express()
const port=9110
app.use(express.static('public'))
app.listen(port,()=>{
    console.log("server running at port num:"+port)
})