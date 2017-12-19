var express =require('express');
var app=express();
const path=require('path');
var pathJoin =path.join('__dirname','../public');
var port=process.env.PORT||3000;
app.use(express.static(pathJoin));
app.listen(port,()=>{
    console.log(`Listening to port:${port}`)
})