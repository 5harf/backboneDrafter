var request = require('request');
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser')

app.use(express.static(__dirname));
app.use(bodyParser.json());
var datum = '';
request
  .get('http://api.mtgapi.com/v2/booster/bfz')
  .on('data', function(data) {
    datum += data;// 200
  });

// var getPack = function(url, callback) {
//   $.ajax({
//     url: url,
//     type: 'GET',
//     contentType: 'application/json',
//     success: function (data) {
//       callback(data);
//     }
//   });
// };
// getPack('http://api.mtgapi.com/v2/booster/bfz');

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/pack', function (req, res) {
  // getPack('http://api.mtgapi.com/v2/booster/bfz', function(data) {
    // console.log(data);
    // res.end();
  // });
  // console.dir($)
});


app.post('/classes/', function (req, res) {

  
  console.log(req.body);
  res.send();
});

app.get('/classes/', function(req, res) {
  // var messages = fs.readFileSync('messages.txt', 'utf8');

  // messages = messages.split('\n').reverse();
  // messages.shift();
  // messages = messages.map(function(element) {
  //   if (element) {
  //     return JSON.parse(element);
  //   }
  // });
  // console.log(messages)
  // res.end(JSON.stringify({results:messages}))
})
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhose:3000');
});
