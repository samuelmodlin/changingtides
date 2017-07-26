var express = require('express');
  app = express(),
  path = require("path"),
  bodyParser = require('body-parser'),
  send = require('gmail-send')({
    user: 'changingtideshaiti@gmail.com',
    pass: 'orphanage11',
    to:   'benjamin_modlin@branson.org',
    subject: 'test subject',
    text:    'HTML Not supported... contact samuel_modlin@branson.org',         // Plain text
    html:    '<b>html text</b>'
  });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/donate', function(req, res) {
  res.render('pages/donate');
});
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.post('/contact/submit', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var reason = req.body.reason;

  send({
    subject: 'Auto Generated Form ' + Math.floor((Math.random() * 100000000000000) + 1),
    html: '<h1 style = "color: red">Changing Tides Orphanage Contact Form Submittion:</h1><br><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Name: ' + name + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Email: ' + email + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Reason: ' + reason + '</h2><div><h2>Message: ' + message + '</h2></div>',
  }, function (err, res) {
    console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
  });

});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
