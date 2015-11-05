

var fs = require('fs'),
  http = require('http');
var port = 3000;

var ip = "127.0.0.1";
var server = http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

