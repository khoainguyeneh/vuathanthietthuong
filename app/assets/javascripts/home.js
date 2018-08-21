$(document).on('turbolinks:load', function(){
	new WOW().init();

	$(document).scroll(function () {
	  var nav = $("nav");
	  nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
	});

	$('.contact-section').on('scroll', function() {
		$('.first-col').addClass('animated fadeInLeft');
	});
})
