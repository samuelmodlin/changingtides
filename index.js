var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'changingtideshaiti@gmail.com',
        clientId: '504109041359-m27ngu5prtsim73h9lfj1ju7rgq0j7u3.apps.googleusercontent.com',
        clientSecret: 'suzKgknkbTYo7bsU4N5UrCp6',
        refreshToken: '1/DNy5hlI6tEndi4ZLCS8rz0xdysYGQ9Hk0xw5hWi8EL4',
        accessToken: 'ya29.GluVBLpcsSs5VY4nAqfTjO4XuQ0CLCbewdTUQlLglnX92XuxyXYtv6OHd9iRo23RAHZekGL5PKxQy7j73m65FoFA5OOto6jiRkHzlbJjJm03Xoz2B6vmxYFB-F5D',
    }
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

  let mailOptions = {
      from: '"Changing Tides" <changingtideshaiti@gmail.com>',
      to: 'chris_mazzola@branson.org',
      subject: 'Auto Generated Form ' + Math.floor((Math.random() * 100000000000000) + 1),
      html: '<h1 style = "color: red">Changing Tides Orphanage Contact Form Submittion:</h1><br><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Name: ' + name + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Email: ' + email + '</h2><h2 style = "border-bottom: 2px dotted black; border-top: 2px dotted black">Reason: ' + reason + '</h2><div><h2>Message: ' + message + '</h2></div>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });

});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
