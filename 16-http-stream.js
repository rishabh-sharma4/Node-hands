var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    // this takes lot of time as all data is fetched at once
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(error)=>{
        res.end(error)
    })
}).listen(5000)