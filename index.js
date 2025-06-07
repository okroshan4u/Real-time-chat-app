const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


//  socket.io here socket is client 
io.on("connection", (socket) => {
    socket.on("user-message",(message)=>{
        // console.log("A new user Message", message);
        io.emit("message", message);
    });
});


app.use(express.static(path.resolve("./public")))
server.listen(9000, ()=> console.log(`Server started at PORT: 9000`))

app.get("/",(req , res) => {
  return res.sendFile("/public/index.html")
});