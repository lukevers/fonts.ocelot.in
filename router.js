// Load modules
var url = require('url');

// Router module
module.exports = function(app, config) {

	// Home
	app.get('/', function(req, res) {
		res.send('hello world');
	});

	// CSS
	app.get('/css', function(req, res) {
		var query = url.parse(req.url, true).query;
		if (!query['font-family']) {
			res.send('Could not parse query.'); 
		} else {
			res.setHeader("Content-Type", "text/css");
			var content = '@font-face {\nfont-family: '+query["font-family"]+';\nsrc: url('+config.url+'/fonts/'+query["font-family"]+'.woff) format("woff"), url('+config.url+'/fonts/'+query["font-family"]+'.ttf) format("ttf"), url('+config.url+'/fonts/'+query["font-family"]+'.otf) format("otf"), url('+config.url+'/fonts/'+query["font-family"]+'.eot) format("eot"), url('+config.url+'/fonts/'+query["font-family"]+'.svg) format("svg");\n}';
			res.send(content);
		}
	});

	// 404
	app.get('*', function(req, res) {
		res.send('404');
	});
}