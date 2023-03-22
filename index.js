// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write("<h1>YoWaii mo</h1>");
//     resp.end();
// }).listen(3500)

// const colors = require('colors')
// console.log("Welcome Node".red)

// const http = require('http');
// const data = require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(3500)

// console.log(process.argv[22])

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/sword.txt`;

// fs.writeFileSync(filePath,'This is a text file')

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,' And i wrote it',(err)=>{
//     if(!err) console.log('file is updated')
// })

// fs.rename(filePath,`${dirPath}/swords.txt`,(err)=>{
//     if(!err) console.log('file name is updated')
// })

// fs.unlinkSync(`${dirPath}/sword.tsx`)

// const express = require('express')
// const app =express();

// app.get('',(req,res)=>{
//     console.log('Named by chrome'+req.query.aka)
//     res.send("this is home page,"+ req.query.aka);
// });
// app.get('/about',(req,res)=>{
//     res.send("this is about page");
// });

// app.listen(3500);

const express = require('express');
const path = require('path');

const app = express();
const dirPath = path.join(__dirname,'public')

app.use(express.static(dirPath));

app.listen(3500);