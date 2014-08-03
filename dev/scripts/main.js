/**
*   Main Description
*/

'use strict';
require.config({
    paths: {
    	app: 'app',

    }
});

require(['app'], function (app) {
	$(document).ready(function(){

		$("#termsCaller").on('click', function(){
			if($('.terms').length){
				$('.terms').slideDown();
				$(window).scrollTo($('.terms'), 800);
			}
		});
		$('.terms>.close').on('click', function(){
			if($('.terms').length){
				$('.terms').slideUp();
			}
		});

		$('.about-node>.about-title').on('click', function(){
			var slide = $(this).parent().children('.about-slide');
			if(slide.css('display') == 'block'){
				slide.slideUp();
			} else {
				slide.slideDown();
			}
		});

		$(".fw-button>.txt").on('click', function(){
			var fwButton = $(this).parent();
			if(fwButton.hasClass('active')){
				fwButton.removeClass('active');
				fwButton.children('.footerSlide').slideUp();
			} else {
				fwButton.addClass('active');
				fwButton.children('.footerSlide').slideDown();
			}
		});

		$(".owl>.owlContent").owlCarousel({
			singleItem : true,
			pagination : true,
			autoHeight : true,
			navigation : true,
			navigationText : ['A', 'B']
			// ,paginationNumbers : true
		});

		$('.fw-banner>.bottom-arrow').on('click', function(){
			$(window).scrollTo($(window).height(), 1000);
		});

		$('.social>.icon').on('click', function(){
			var content = $(this).parent().children('.socialContent');
			if(content.hasClass('active')){
				content.removeClass('active');
				content.slideUp();
			} else {
				content.addClass('active');
				content.slideDown();
			}
		});

		$('.menu').on('click', function(){
			var nav = $('#nav');
			if(nav.hasClass('active')){
				nav.removeClass('active');
			} else {
				nav.addClass('active');
			}
		});
	});
});

