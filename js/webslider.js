/* WebSlider (https://github.com/Imdsm/WebSlider)
 * Adam K Dean (Imdsm)
 * 15/07/2013
 */

$(function() {

	$('.slide').css('height', window.innerHeight);

	$(window).resize(function() {
		$('.slide').css('height', window.innerHeight);
	});

	$('.button').smoothScroll();

	$('.button').click(function(event) {
		event.preventDefault();		
		$.smoothScroll({ scrollTarget: this.hash });		
	});
});