// server.js
const WebSocket = require('ws');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log("Client connected");

  ws.on('message', (msg) => {
    console.log("Received:", msg.toString());
  });

  ws.on('close', () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`WebSocket Server running on port ${PORT}`);
});
