/**
*   Main Description
*/

'use strict';
require.config({
    paths: {app: 'app'
    }
});

require(['app'], function (app) {
	$(document).ready(function(){

		$("#termsCaller").on('click', function(){
			if($('.terms').length){
				$('.terms').slideDown();
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
	});
});

