const http = require('http')
const path= require('path')
const fs = require('fs')
const { connect } = require('tls')



const server = http.createServer((req,res) =>{
    if(req.url === '/') //localhost:3000/
{
    fs.readFile(path.join(__dirname,'public','index.html'),(err,connect) =>{
        if(err) console.log(err)
        res.writeHead(200,{'content-Type':"text/html"})
        res.end(connect)
    })
}
else if(req.url === "/about"){
    fs.readFile(path.join(__dirname,'public','about.html'),(err,connect) =>{
        if(err) console.log(err)
        res.writeHead(200,{'content-Type':"text/html"})
        res.end(connect)
    })

}
else if(req.url === "/services"){
    fs.readFile(path.join(__dirname,'public','services.html'),(err,connect) =>{
        if(err) console.log(err)
        res.writeHead(200,{'content-Type':"text/html"})
        res.end(connect)
    }
    )
    }
})

server.listen(3000,()=> console.log('Server is running at 3000'))
