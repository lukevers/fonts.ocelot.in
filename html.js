// Load modules
var fs = require('fs');

// Create global alphabet to show what it looks like
var alphabet = 'A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 1 2 3 4 5 6 7 8 9 0';

module.exports = function() {

	var html =  '<!DOCTYPE html>';
	html += '<html lang="en">';
	html += '<head>';
	html += '<title>Appnode Fonts</title>';
	html += '<meta charset="utf-8">';
	html += '<link rel="stylesheet" href="assets/css/style.css">';
	html += '</head>';
	html += '<body>';

	var files = fs.readdirSync('googlefontdirectory/fonts/');
	for (var i = 0; i < files.length; i++) {
		if (files[i].indexOf('.ttf') > -1)
			html += '<div class="font"><div class="title">'+files[i].substring(0, files[i].length-4)+'</div>'+alphabet+'</div>';
	}

	html += '</body>';
	html += '</html>';
	/*

	fs.readdir('googlefontdirectory/fonts/', function(err, files) {
			if (err) {
				return '';
			} else {
				for (var i = 0; i < files.length; i++) {
					if (files[i].indexOf('.ttf') > -1)
						html += '<div class="font"><div class="title">'+files[i].substring(0, files[i].length-4)+'</div>'+alphabet+'</div>';
				}
				html += '</body>';
				html += '</html>';
			}
		});
	*/
	return html;
}