 var socket = io();
 // listen for server connection
 socket.on("connect",function(){
   console.log("Connected to Socket I/O Server!");
 });

 //setup for custom events
 socket.on("message",function(message){
   console.log("New Message !");
   console.log(message.text);
 });
