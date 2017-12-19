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
IO.on('connection',(socket)=>{
    socket.emit('newEmail',{
        From:"Google",
        To:"Aiti Vinayak",
        Sub:"Welcome to google as our creative software developer"
    })
    console.log('connected to server');
    socket.on('createMessage',(message)=>{
        console.log('message',message);
        IO.emit('newMessage',{
            form:message.from,
            text:message.text,
            createdAt:new Date().getTime()
        })
    })
})
server.listen(port,()=>{
    console.log(`Listening to port:${port}`)
})