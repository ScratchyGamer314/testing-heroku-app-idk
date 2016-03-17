 var socket = io();
 // listen for server connection
 socket.on("connect",function(){
   console.log("Connected to Socket I/O Server!");
 });
