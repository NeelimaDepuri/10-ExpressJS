const http=require('http')
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.write('<html')
    res.write('<head><title>ExpressJS Framework</title></head>')
    res.write('<body><h3>hello from neel<h3></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000,()=>{
    console.log("server running om port 3000")
})