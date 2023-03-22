const http = require('http');

http.createServer((req, resp)=>{
    resp.write("<h1>YoWaii mo</h1>");
    resp.end();
}).listen(3500)