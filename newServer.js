var request = require('request');
var express = require('express');
var app = express();
var fs = require('fs');
var parser = require('body-parser')
var morgan = require('morgan');

var db = require('./server/db');

// Middleware

// Router
var router = require('./server/routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", (process.env.PORT || 3000));

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/", router);

// Serve the client files
app.use(express.static(__dirname));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}



















// app.use(express.static(__dirname));
// app.use(bodyParser.json());
// var datum = '';
// // request
// //   .get('http://api.mtgapi.com/v2/booster/bfz')
// //   .on('data', function(data) {
// //     datum += data;// 200
// //   })
// //   .on('end', function(data) {
// //     console.log(data)
// //   });

// app.get('/index', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });




// // var db = require('./db');

// // Middleware

// // Router
// var router = require('./routes.js');

// var app = express();
// module.exports.app = app;

// // Set what we are listening on.
// app.set("port", 3000);

// // Logging and parsing
// app.use(morgan('dev'));
// app.use(parser.json());

// // Set up our routes
// app.use("/classes", router);

// // Serve the client files
// app.use(express.static(__dirname + "/../client"));

// // If we are being run directly, run the server.
// if (!module.parent) {
//   app.listen(app.get("port"));
//   console.log("Listening on", app.get("port"));
// }






