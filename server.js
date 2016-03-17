var PORT = process.env.PORT || 3000; // take port from heroku or for loacalhost
var express = require("express");
var app = express(); // express app which is used boilerplate for HTTP
var http = require("http").Server(app);
// expose the folder via express thought
app.use(express.static(__dirname+'/public'));
http.listen(PORT,function(){
  console.log("server started");
});
