const fs = require('fs');

const path = require('path');

const express = require("express");
const app = express();

const httpServer = require('https').createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
  }, app);

  console.log(__dirname);

var cors = require('cors')

app.use(cors())
//set plublic folder
app.use(express.static('public'));


const options = {
  cors: {
    origin: 'https://192.168.1.8:3000/',
    methods: ['GET', 'POST']

  }
};

const io = require('socket.io')(httpServer, options);

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname +'../public/index.html'));
});
  
  io.on('connection', function(socket) {
    console.log('new connection');
    socket.emit('message', 'This is a message from the dark side.');
  });

  io.on('message', function(data) {
    console.log(data);
  });



  const serverPort = 3000;
  httpServer.listen(serverPort, function() {
    console.log('server up and running at port %s', serverPort);
  });
