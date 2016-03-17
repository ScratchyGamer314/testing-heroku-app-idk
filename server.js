var PORT = process.env.PORT || 3000; // take port from heroku or for loacalhost
var express = require("express");
var app = express(); // express app which is used boilerplate for HTTP
var http = require("http").Server(app);

//socket io module
var io = require("socket.io")(http);

// expose the folder via express thought
app.use(express.static(__dirname+'/public'));

// io.on listens for events
io.on("connection",function(){
  console.log("User is connected");
});
http.listen(PORT,function(){
  console.log("server started");
});
