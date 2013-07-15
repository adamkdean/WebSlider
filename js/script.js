$(function() {

	// resize divs
	$('.slide').css('height', window.innerHeight);
	$(window).resize(function() {
		$('.slide').css('height', window.innerHeight);
	});
});