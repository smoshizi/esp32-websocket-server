// server.js
const WebSocket = require('ws');
const PORT = process.env.PORT || 10000;

const server = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket Server listening on port ${PORT}`);
});

server.on('connection', (socket) => {
  console.log("Client connected");

  socket.on('message', (data) => {
    console.log("Received:", data.toString());

    // Optional: Echo back or broadcast
    // socket.send("ACK: " + data.toString());
  });

  socket.on('close', () => {
    console.log("Client disconnected");
  });
});
