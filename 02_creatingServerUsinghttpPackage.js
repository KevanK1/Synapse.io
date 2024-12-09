let http = require("http")
// To create any server we need this "http" package

let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("welcome to home page")
    }

    if(req.url=="/about"){
        res.end("welcome to about page")
    }

    if(req.url=="/mine"){
        res.end("welcome to minecraft")
    }

    let st=String(req.url).replace("/","")
    // console.log(st)
    res.end(`Welcome to ${st.toUpperCase()} page :D`)
    
})
// This will just create the server's instance, it wont run it.

server.listen(3000)
// Assigning the port to our server