/* WebSlider (https://github.com/Imdsm/WebSlider)
 * Adam K Dean (Imdsm)
 * 15/07/2013
 */

$(function() {

	// resize slides to full window height
	$('.slide').css('height', window.innerHeight);
	$(window).resize(function() {
		$('.slide').css('height', window.innerHeight);
	});

	$('.button').click(function() {
		var target = $(this).data('target');

		//

	});
});