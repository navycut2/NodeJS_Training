var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'public'));

app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
    var strValue = req.body.str;
    res.send(strValue.split('').reverse().join(''));
    //console.log(strValue.split('').reverse().join(''));
});

app.listen(process.argv[2]);