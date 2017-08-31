var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sslRedirect = require('heroku-ssl-redirect');
var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AWcJTPTDTor0OL8IpQy9mhtvmxFI2pD6p9hZUaWRbvsmYtD5J7U89Xa_0_R41h73_j8-9VXXmy61lMO_',
  'client_secret': 'EB58eue9wiswxHwlOZqJR56HLty1cZp9IJS-P4FGr2Qb4bXJvJ4-CwpxOAsGOsnWR6ttq4zJstCtPcWJ'
});
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'changingtideshaiti@gmail.com',
        clientId: '504109041359-te8b682lu687g6hs9r095e5pp992qqv7.apps.googleusercontent.com',
        clientSecret: 'nOjinQOEWysb2VNHtQRwKsZs',
        refreshToken: '1/_W7QXFGvz_60_GkFZG1eeRk5-z1NuIFsq7z8Uv8_LxA2YYIwZ4boXck5xApKvVI-',
        accessToken: 'ya29.Glu4BKe1YID_Klr5mvtfawRoFw9a-pVWTNyhNjI9WaCI3ZKloeD8CB8en-SreBXZWfd0OVv31WSOD_f0E8C7KNMSlmK_TBa84Cu3_KB2nLpz603qg4BABDpjv1wx',
    }
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(sslRedirect());

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
