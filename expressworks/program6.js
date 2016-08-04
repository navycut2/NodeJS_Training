var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.put('/message/:id-:name', function (req, res) {
   var id = req.params.id;
   res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

// alternate solution using app.param middleware
app.param('id', function (req, res, next, id) {
  req.id = id;
  console.log("middleware called");
  next();
})

app.put('/message/:id', function (req, res, next) {
  console.log(req.id);
   var id = req.params.id;
   res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
})

app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});
app.listen(process.argv[2]);