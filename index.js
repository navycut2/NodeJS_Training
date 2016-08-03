var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/flights', function (req, res) {

    console.log(req.query);
    console.log(req.route);
    var file = './jsonData/flightsData.json';
    var jsonData = {"data":"data1"};
    jsonData = fs.readFileSync(file,"utf8");
    
  //res.send(JSON.stringify(jsonData));
  res.json(JSON.parse(jsonData));
});

app.post('/search', function (req, res) {
  res.send('Hello Search!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});