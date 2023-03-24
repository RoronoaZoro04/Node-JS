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

// const express = require('express');
// const path = require('path');

// const app = express();
// const dirPath = path.join(__dirname,'public')

// app.use(express.static(dirPath));
// app.set('view engine','ejs');

// app.get('/profile',(_,res)=>{
//     const user={
//         name:"roronoa zoro",
//         email:'zoro@1223' ,
//         skills:"3 sword style",
//     }
//     res.render('profile',{user})
// })

// app.listen(3500);

// const express = require('express');
// const app = express();

// const reqFilter =(req,res,next)=>{
//     console.log('reqFilter')
//     next();
// }

// app.use(reqFilter);

// app.get('/',(req,res)=>{
//     res.send('welcome to home page')
// })

// app.get('/user',(req,res)=>{
//     res.send('welcome to user page')
// })

// app.listen(3500);

// const {MongoClient} = require('mongodb')
// const url = 'mongodb://127.0.0.1'
// const database = 'test'
// const client = new MongoClient(url)

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database)
//     let collection = db.collection('node-test')
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

// const mongoose = require('mongoose');

// const main = async()=>{
//    await mongoose.connect("mongodb://127.0.0.1/test")
//    const ProductSchema = new mongoose.Schema({
//     name:String,
//     Bounty:Number
//    })
//    const ProductsModel = mongoose.model('node-test',ProductSchema)
//    let data = new ProductsModel({name:"katakuri",Bounty:400})
//    let result = await data.save();
//    console.log(result)
// }
// main();

// const express = require('express')
// const pirate = require('./pirate')
// require('./config')

// const app = express();
// app.use(express.json())

// app.post('/create',async(req,res)=>{
//     let data = new pirate(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
// })

// app.get('/listen',async(req,res)=>{
//     let data = await pirate.find()
//     console.log(data)
//         res.send(data)
// })

// app.delete('/delete/:name',async(req,res)=>{
//     let data = await pirate.deleteMany(req.params)
//     console.log(req.body)
//     res.send(data)
// })

// app.put('/update/:_id',async(req,res)=>{
//     let data = await pirate.updateOne(
//         req.params,
//         {
//             $set:req.body,
//         }
//     )
//     res.send(data)
//     console.log(data)
// })

// app.listen(3500);