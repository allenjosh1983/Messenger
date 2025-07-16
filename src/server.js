const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files (index.html, client.js) from the 'public' folder
app.use(express.static('public'));

// Socket.IO communication
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chatMessage', (msg) => {
    console.log('Message received:', msg);
    io.emit('chatMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});