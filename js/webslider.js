/* WebSlider (https://github.com/Imdsm/WebSlider)
 * Adam K Dean (Imdsm)
 * 15/07/2013
 */

$(function() {

	// set up smooth scrolling
	$('body').smoothScroll();
	$('p.button a').click(function(event) {
		event.preventDefault();		
		$.smoothScroll({ scrollTarget: this.hash });		
	});

	// set all slides to be 100% window height, and resize-proof too
	$('.slide').css('height', window.innerHeight);
	$(window).resize(function() {
		$('.slide').css('height', window.innerHeight);
	});	
});