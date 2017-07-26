var express = require('express');
  app = express(),
  bodyParser = require('body-parser'),
  path = require("path");

//var nodemailer = require('nodemailer');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());

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

console.log('* [example 1.1] sending test email');

// Require'ing module and setting default options

var send = require('gmail-send')({
//var send = require('../index.js')({
  user: 'changingtideshaiti@gmail.com',
  pass: 'orphanage11',
  to:   'modlin.sam@gmail.com',
  subject: 'test subject',
  text:    'gmail-send example 1',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});


// Override any default option and send email

console.log('* [example 1.1] sending test email');

send({ // Overriding default parameters
  subject: 'just want to email',
}, function (err, res) {
  console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
});



app.post('/contact/submit', function(req, res) {
  /*console.log('form')
  res.setHeader('Content-Type', 'application/json');
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var reason = req.body.reason;

  var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
          user: 'changingtideshaiti@gmail.com',
          pass: 'orphanage11'
      }
  });
  let mailOptions = {
      from: '"Changing Tides Website <Samuel Modlin>"',
      to: 'modlin.sam@gmail.com',
      subject: 'Auto Generated Form ' + Math.floor((Math.random() * 100000000000000) + 1),
      text: 'HTML Not supported... please email samuel_modlin@branson.org',
      html: '<h1 style = "color: red">Changing Tides Orphanage Contact Form Submittion:</h1><br><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Name: ' + name + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Email: ' + email + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Reason: ' + reason + '</h2><div><h2>Message: ' + message + '</h2></div>',
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('The Message %s sent: %s', info.messageId, info.response);
  });*/
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
