const http = require('http');

const server = http.createServer((req,res)=>{
 if(req.url === '/'){
     res.end('welcome to our homepage')
 }
    if (req.url === '/about'){
        res.end('Here is our short history')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>we cant seem to find</p>
        <a href="/">back home</a>
    `)
})

server.listen(3000)