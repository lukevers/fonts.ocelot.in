// Load modules
var    http = require('http'),
	express = require('express'),
	   path = require('path');

// Create the app
var app = express();
app.use('/fonts', express.static(__dirname + '/googlefontdirectory/fonts'));
app.use('/static', express.static(__dirname + '/static'));

// Load the configuration file
var config = require('./config.json');

// Load the router
require('./router')(app, config, require('./html')(config), require('./files')());

// Serve
http.createServer(app).listen(config.port, '::');