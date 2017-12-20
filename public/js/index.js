var socket =io();
socket.on('connect',function(){
    console.log('Yea the connection is established');
})    
socket.on('disconnect',function(){
    console.log('disconnected from server');
})
socket.on('newMessage',function(message)
{
    console.log('Caught one message all',message);
})
socket.emit('createMessage',{from:"vinaysk",text:"hey "});

socket.on('createMessage',function(message){
    console.log(message)

});

