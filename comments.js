// create web server
var http = require("http");
var fs = require("fs");

// create server
http.createServer(function (req, res) {
  // read file
  fs.readFile("comments.json", "utf8", function (err, data) {
    // check if file is empty
    if (data == "") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("No comments yet!");
      res.end();
    } else {
      // parse JSON data
      var comments = JSON.parse(data);
      // write response
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(comments));
      res.end();
    }
  });
}).listen(8080);
console.log("Server running at http://localhost:8080/");