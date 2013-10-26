// Load modules
var http = require('http');
var express = require('express');

// Create the app
var app = express();

// Load the configuration file
var config = require('./config.json');

// Load the router
require('./router')(app, config);

// Serve
http.createServer(app).listen(config.port, '::');