 var socket = io();
 // listen for server connection
 // get query params from url
 var name = getQueryVariable("name") || 'Anonymous';
 var room = getQueryVariable("room") || 'No Room Selected';

 $(".room-title").text(room);
 // fires when client successfully conencts to the server
 socket.on("connect", function() {
   console.log("Connected to Socket I/O Server!");
   console.log(name + " wants to join  " + room);
   // to join a specific room
   socket.emit('joinRoom', {
     name: name,
     room: room
   });
 });

 //setup for custom events
 socket.on("message", function(message) {
   console.log("New Message !");
   console.log(message.text);
   // insert messages in container
   var $messages = $(".messages");
   var momentTimestamp = moment.utc(message.timestamp).local().format("h:mm a");
   //$(".messages").append($('<p>').text(message.text));
   $messages.append("<strong>" + momentTimestamp + " " + message.name + "</strong>");
   $messages.append("<p>" + message.text + "</p>");
 });

 // handles submitting of new message
 var $form = $("#messageForm");
 var $message = $form.find('input[name=message]');
 $form.on("submit", function(event) {
   event.preventDefault();
   socket.emit("message", {
     text: $message.val(),
     name: name
   });
   $message.val('');
 });
