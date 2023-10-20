import http from 'http';
import { Server } from 'socket.io';


const server = http.createServer((req, res) => {
  // Handle other features on port 5000
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('User connected');

  // Handle client disconnect if needed
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});