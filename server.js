const { Syncrosse } = require('@syncrosse/server');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const syncrosse = new Syncrosse(server);

syncrosse.onAction('ping', (data) => {
  syncrosse.triggerEvent('pong');
});
syncrosse.onJoin(() => {console.log("HELLO")});

server.listen(5000, () => {
  console.log('listening on *:5000');
});


