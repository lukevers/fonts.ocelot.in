// Load modules
var fs = require('fs');

// Create global alphabet to show what it looks like
var alphabet =  'A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 1 2 3 4 5 6 7 8 9 0';

module.exports = function(config) {

	var fileList = [];

	var html = '<!DOCTYPE html>';
	html += '<html lang="en">';
	html += '<head>';
	html += '<title>Ocelot Fonts</title>';
	html += '<meta charset="utf-8">';
	html += '<link rel="stylesheet" href="static/css/style.css">';
	html += '<script type="text/javascript" src="static/js/jquery.js"></script>';
	html += '<script type="text/javascript" src="static/js/app.js"></script>';
	html += '</head>';
	html += '<body>';
	html += '<div class="head">Ocelot <span class="light">Fonts</span></div>';

	var files = fs.readdirSync('googlefontdirectory/fonts/');
	html += '<div class="font-bin">';
	for (var i = 0; i < files.length; i++) {
		if (files[i].indexOf('.ttf') > -1) {
			fileList.push(files[i].substring(0, files[i].length-4));
		}
	}

	html += '</div><div class="toolbar"><input type="text" placeholder="Search" id="search">';
	html += '<br/><br/><div class="numfonts">'+fileList.length+'</div> fonts</div>';
	html += '<div id="list" style="display: none;">'+fileList.join(",")+'</div>';
	html += '<div id="alphabet" style="display: none;">'+alphabet+'</div>';
	html += '<div id="config" style="display: none;">'+config.url+'</div>';
	html += '</body></html>';

	return html;
}