const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url=== '/about'){
        res.end('Here is our short history')
    }

//res.write('Welcome to our home page')
else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
`);
}
})

server.listen(5000,()=>{
    console.log("We are listening to port 5000")
});//this is the port number to which we are listening  