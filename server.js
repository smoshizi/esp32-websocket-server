// server.js
const WebSocket = require('ws');
const server = require('http').createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log("ESP32 connected");

  ws.on('message', (message) => {
    console.log("Received:", message.toString());
  });

  ws.on('close', () => {
    console.log("ESP32 disconnected");
  });
});

server.listen(81, () => {
  console.log("WebSocket Server listening on port 81");
});
