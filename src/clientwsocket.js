// Connect to server
const socket = io.connect('https://192.168.1.8:3000');

// Ask channel name from user
channel = prompt('Enter signaling channel name:');
if (channel !== '') {
  console.log('Trying to create or join channel: ', channel);
  // Send 'create or join' to the server
  socket.emit('create or join', channel);
}

socket.on('message', function(data) {
  console.log(data);
});

// Handle 'created' message
socket.on('created', function (channel) {
  console.log('channel ' + channel + ' has been created!');
  console.log('This peer is the initiator...');
});

