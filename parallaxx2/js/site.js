$(document).ready(function() {
	$(window).scroll(function(){
		$('*[class^="parallax"]').each(function(r){
			var pos = $(this).offset().top;
			var scrolled = $(window).scrollTop();
	    	$('*[class^="parallax"]').css('top', -(scrolled * 0.5) + 'px');			
	    });
	});
});