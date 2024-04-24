$(document).ready(function(){
						   
	//Menu
	$('.nav-icon').click(function(){
		$(this).toggleClass('active');	
		$('.hero .header').toggleClass('menu-active');
		$('.menu').stop().slideToggle('fast');						  
	});
	
	//Modal
	$('.team').each(function(){
		$(this).click(function(){
			$(this).parent().find('.modal-window').addClass('active');
			$('.modal-overlay').addClass('active');
			$('body').addClass('modal-window-active');
		});					 
	});
	$('.modal-window-close').click(function(){
		$('.modal-window, .modal-overlay').removeClass('active');
		$('body').removeClass('modal-window-active');
	});	

});

//Testimonial Slider
var testimonialSlider = new Swiper('.testimonial-slider', {
	effect: 'fade',	
	autoHeight: true,
	autoplay: {
	  delay: 5000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
        nextEl: '.slider-arrow-right',
        prevEl: '.slider-arrow-left',
    }
});