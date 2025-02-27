//importing modules to use in app
import express from "express";
import http from "http";
import { Server } from "socket.io";

//creating variables to handle imports
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
const PORT = 3000;

//when a new client connects to the server
io.on("connection", (socket) => {
  //log the user's ID
  console.log(`User Connected ${socket.id}`);

  //show user id on connection
  socket.emit("message", `Connected user: ${socket.id}`);

  //broadcast new message to all users
  socket.broadcast.emit("message", `User ${socket.id} joined the chat.`);

  //listen for new message events from client
  socket.on("message", (message) => {
    //log the message
    console.log("Received message:", message);
    //broadcast the message to all other users
    socket.broadcast.emit("message", `${socket.id} says: ${message}`);
  });

  //listen for the client disconnecting from the server
  socket.on("disconnect", () => {
    //log when the user disconnects
    console.log("User Disconnected");
  });
});

//listening for connection to server and logging connection
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
