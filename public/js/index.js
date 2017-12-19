var socket =io();
socket.on('connect',function(){
    console.log('Yea the connection is established');
})    
socket.on('disconnect',function(){
    console.log('disconnected from server');
})
socket.on('newEmail',function(email)
{
    console.log('new email created',email);
})
socket.emit('createEmail',{
    Name:"bill gates",
    Age:"66",
    
})