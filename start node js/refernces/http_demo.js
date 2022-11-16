const http = require('http')
 //create Server


 const Server = http.createServer((req,res) => {
    res.write("<h1> Hellooo Nodee </h1>")
    res.end()

 })
 Server.listen(5000,() => {console.log ("server started at port 5000")
 })