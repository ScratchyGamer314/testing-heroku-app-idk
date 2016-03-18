 var socket = io();
 // listen for server connection
 socket.on("connect", function() {
   console.log("Connected to Socket I/O Server!");
 });

 //setup for custom events
 socket.on("message", function(message) {
   console.log("New Message !");
   console.log(message.text);
   // insert messages in container
   var momentTimestamp = moment.utc(message.timestamp).local().format("h:mm a");
   //$(".messages").append($('<p>').text(message.text));
   $(".messages").append("<p><strong>"+momentTimestamp+"</strong>"+ " :"+ message.text +"</p>");
 });

 // handles submitting of new message
 var $form = $("#messageForm");
 var $message = $form.find('input[name=message]');
 $form.on("submit", function(event) {
   event.preventDefault();
   socket.emit("message", {
     text: $message.val()
   });
   $message.val('');
 });
