var express =require('express');
var http=require('http');
var socketIO=require('socket.io');
var app=express();
var server=http.createServer(app);
var IO=socketIO(server);
const path=require('path');
var pathJoin =path.join('__dirname','../public');
var port=process.env.PORT||3000;
app.use(express.static(pathJoin));
IO.on('connection',()=>{
    console.log('connected to server');
})
server.listen(port,()=>{
    console.log(`Listening to port:${port}`)
})