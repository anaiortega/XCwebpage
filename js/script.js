$(function(){
	'use strict';
	//Slider
	var $owl = $('.owl');
	$owl.each( function() {
		var $carousel1 = $(this);
		$carousel1.owlCarousel({
			items : $carousel1.attr('data-items'),
			itemsDesktop : [1199,$carousel1.attr('data-itemsDesktop')],
			itemsDesktopSmall : [979,$carousel1.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$carousel1.attr('data-itemsTablet')],
			itemsMobile :  [479,$carousel1.attr('data-itemsMobile')],
			navigation : JSON.parse($carousel1.attr('data-buttons')),
			pagination: JSON.parse($carousel1.attr('data-pag')),
			slideSpeed: 1000,
			paginationSpeed : 1000,
			navigationText : false
		});
	 });
	//Loander
	$(window).load(function()
	{
		$('.preloader p').fadeOut();
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});
	});
	//Countdown
	$('.simple-timer').simpletimer({
		day: 45,
		dayDom: '.timer-day',
		hour: 16,
		hourDom: '.timer-hour',
		minute: 47,
		minuteDom: '.timer-minute',
		second: 0,
		secondDom: '.timer-second',
		pause: '#pause_btn'
	});
	//Header resize
	window.addEventListener('scroll', function(e){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 1,
			header = document.querySelector("header");
		if (distanceY > shrinkOn) {
			classie.add(header,"smaller");
		} else {
			if (classie.has(header,"smaller")) {
				classie.remove(header,"smaller");
			}
		}
	});
	//Menu
	$('.menu-btn').on('click',function(e){
		e.stopPropagation();
		$('.menu-rs').fadeIn();
	});
	$('.r-mv').on('click',function(){
		$('.menu-rs').fadeOut();
	});
	//Parallax scrolling
	function skrollr_w(){
		if ($(window).width() > 600)
		{
	        skrollr.init({
		     forceHeight: false
	        });
		}
		else
		{
		var s = skrollr.init();
        s.destroy();
		}
	}
	skrollr_w();
        window.onresize = function()
	{
		skrollr_w();
	}
	//Search
	$('.search-box  > i').on('click',function(e){
		e.stopPropagation();
		$(this).hide();
		$(this).parent().find('form').fadeIn();
		$(this).parent().find('form .search-txt').val('').focus();
	});
	$('.search-txt').on('click', function (e) {
		e.stopPropagation();
	});
	$('.search-btn').on('click', function (e) {
		if($('.search-txt').val()=='')
		{
			$('form .search-txt').focus();
			return false;
		}
	});
	$('body').on('click', function (e) {
		$(this).find('.search-icon').show();
		$(this).find('.search-box form').hide();
	});
	
});