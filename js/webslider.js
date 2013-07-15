$(function() {
	// resize slides to full window height
	$('.slide').css('height', window.innerHeight);
	$(window).resize(function() {
		$('.slide').css('height', window.innerHeight);
	});
});