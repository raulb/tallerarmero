$(document).ready(function(ev){

	$(window).scroll(function () {
		if ($(window.pageYOffset)[0] > 708) {
			$('div.about_right').css('position','fixed');
			$('div.about_right').css('top','20px');
		}else {
			$('div.about_right').css('position','absolute');
			$('div.about_right').css('top','0');
		}
	});
    
});