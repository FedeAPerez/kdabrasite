'use strict';

const 
bodyParser = require('body-parser'),
express = require('express'),
https = require('https'),  
request = require('request');



var app = express();
app.set('port', process.env.PORT || 8000);
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use("/Content", express.static(__dirname + "/Content"));

app.get('/', function (req, res) {
  res.render('index', {});
});

var routes = require('./app/routes/user_routes');
routes(app);

// Start server
// Webhooks must be available via SSL with a certificate signed by a valid 
// certificate authority.
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;







