// Load modules
var fs = require('fs');

module.exports = function() {

	var fonts = [];
	var files = fs.readdirSync('googlefontdirectory/fonts/');
		for (var i = 0; i < files.length; i++) {
			if (files[i].indexOf('.ttf') > -1) {
				fonts.push(files[i].substring(0, files[i].length-4));
			}
		}

	return fonts;
}