var urlParam = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

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
		var parent = $(this).parent();
		var slide = parent.children('.about-slide');
		if(parent.hasClass('active')){
			parent.removeClass('active');
			slide.slideUp();
		} else {
			parent.addClass('active');
			slide.slideDown();
		}
	});

    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
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
		var parent = $(this).parent();
		var content = $(this).parent().children('.socialContent');
		if(parent.hasClass('active')){
			parent.removeClass('active');
			content.slideUp();
		} else {
			parent.addClass('active');
			content.slideDown();
		}
	});

	$('.menu').on('click', function(){
		var wrapper = $('.wrapper');
		if(wrapper.hasClass('mobileShow')){
			wrapper.removeClass('mobileShow');
		} else {
			wrapper.addClass('mobileShow');
		}
	});

	$('.about-desc>.btnWrapper.more').on('click', function(){
		var parent = $(this).parent();
			parent.children('.greyBlock').slideDown();
			parent.addClass('active');
	});
	$('.about-desc>.greyBlock>.btnWrapper.less').on('click', function(){
		var parent = $(this).parent().parent();
		var greyBlock = $(this).parent();
			parent.removeClass('active');
			greyBlock.slideUp();
	});

	$('#aboutPeopleOwlClose').on('click', function(){
		$('#aboutPeopleOwl').fadeOut();
	});

	var checkNavStatus = function(){
		var scrollTop = $(window).scrollTop() || document.documentElement.scrollTop;
		var addClass = ($(window).height() - scrollTop) < ($('#nav').outerHeight() * 1.1);
		if(addClass)
			$('#nav').addClass('active');
		else
			$('#nav').removeClass('active');
	};
	checkNavStatus();

	$(window).scroll(function(){
		checkNavStatus();
	});

	window.showPeopleDetail = function(pIndex){
		$('#aboutPeopleOwl').fadeIn();
	};
});

