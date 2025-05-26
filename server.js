// server.js
const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 10000;

// Create HTTP server
const server = http.createServer();

// Attach WebSocket server to the HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log("Client connected");

  ws.on('message', (message) => {
    console.log("Received:", message.toString());
    // Optional echo
    // ws.send("ACK: " + message.toString());
  });

  ws.on('close', () => {
    console.log("Client disconnected");
  });
});

// Start HTTP server
server.listen(PORT, () => {
  console.log(`WebSocket Server listening on port ${PORT}`);
});
