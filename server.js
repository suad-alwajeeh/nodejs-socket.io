const express= require('express');

const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server,{
    cors :{
        origin:"*"
    }
});

io.on('connection',(socket)=>{
 console.log('connection');
 socket.on('SendChatToClient',(message) => {
     console.log(message);
     io.sockets.emit('SendChatToClient',message);
     //socket.broadcast.emit('SendChatToClient',message);
 });
    socket.on('disconnect',(socket)=>{
        console.log('disconnect');
 });
 socket.on('SendChatTypeA1_50',(message) => {
    console.log(message);
    io.sockets.emit('SendChatTypeA1_50',message);
    //socket.broadcast.emit('SendChatToClient',message);
});
});



server.listen(60000,()=> {
    console.log('server is running')
});