// run using node index.js

var config = require("../vue-app/src/assets/project-config.json");
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("increment-temp", function() {
    console.log("Request to increment temp");
    io.emit("increment-temp");
  });

  socket.on("decrement-temp", function() {
    console.log("Request to decrement temp");
    io.emit("decrement-temp");
  });

  socket.on("toggle-auto-pilot", function() {
    console.log("Request to toggle-auto-pilot");
    io.emit("toggle-auto-pilot");
  });

  socket.on("change-speed", function(speed) {
    console.log("Request to change speed to", speed);
    io.emit("change-speed", speed);
  });
});

http.listen(config.PORT, function() {
  console.log(`listening on *:${config.PORT}`);
});
