const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Messaging Server is live.');
});

io.on('connection', socket => {
  console.log(`🔌 Client connected: ${socket.id}`);

  socket.on('send_message', data => {
    console.log(`📨 Message from ${data.sender}: ${data.text}`);
    io.emit('receive_message', data); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log('✅ Server listening on http://localhost:3001');
});