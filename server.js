// Load modules
var http = require('http');
var express = require('express');
var path = require('path');

// Create the app
var app = express();
app.use('/fonts', express.static(__dirname + '/googlefontdirectory/fonts'));

// Load the configuration file
var config = require('./config.json');

// Load the router
require('./router')(app, config);

// Serve
http.createServer(app).listen(config.port, '::');