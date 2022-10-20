console.log('implementing websocket');
// Connect to server

const fs = require('fs');

const httpServer = require('https').createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
});

const options = {
  cors: {
    origin: 'https://192.168.1.8:8080/',
    methods: ['GET', 'POST']

  },
  path: '/'
};

const io = require('socket.io')(httpServer);
io.on('connection', client => {
  console.log('connecting websocket...');
});
io.listen(8080);

/*
var socket = io.connect('http://localhost:8181');

// Ask channel name from user
channel = prompt("Enter signaling channel name:");
if (channel !== "") {
    console.log('Trying to create or join channel: ', channel);
    // Send 'create or join' to the server
    socket.emit('create or join', channel);
}

// Handle 'created' message
socket.on('created', function (channel){
    console.log('channel ' + channel + ' has been created!');
    console.log('This peer is the initiator...');
});

// Handle 'full' message
socket.on('full', function (channel){

});

// Handle remote logging message from server
socket.on('log', function (array) {
    console.log.apply(console, array);
});
*/
