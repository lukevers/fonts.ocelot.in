$(document).ready(function() {
	var last = 0;
	var list = $('#list').html().split(',');
	last = loadTen(last, list);

	$('.choice_i').bind('click', function() {
		if ($(this).nextAll('.code_i:first').css('display') == 'none') {
			$(this).nextAll('.code_i:first, .code_h:first').toggle();
		} 
	});
	$('.choice_h').bind('click', function() {
		if ($(this).nextAll('.code_h:first').css('display') == 'none') {
			$(this).nextAll('.code_i:first, .code_h:first').toggle();
		} 
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
			last = loadTen(last, list);
        }
	});
});

function newFont(name) {
	var alphabet = $('#alphabet').html();
	var config = $('#config').html();
	$('head').append('<link rel="stylesheet" href="/css?font-family='+name+'">');
	var html = '<div class="font"><div class="title">'+name+'</div><div class="body" style="font-family: '+name+';">'+alphabet;
	html += '<br/><br/><div class="choice_i">@import</div><div class="choice_h">HTML</div><div class="code_i">';
	html += '<textarea rows="1">@import url('+config+'/css?font-family='+name+')</textarea></div>';
	html += '<div class="code_h"><textarea rows="1"><link href="'+config+'/css?font-family='+name+'" rel="stylesheet" type="text/css">';
	html += '</textarea></div></div></div>';
	return html;
}

function loadTen(last, list) {
	for (var i = last; i < (last+10); i++) {
		$('.font-bin').append(newFont(list[i]));
	}
	return last += 10;
}