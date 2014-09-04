/**
*   Example Module Description
*/

define(function (require) {

    'use strict';

    var module = {
        init: function(msg) {
            
            var closeFooterSection = function(pSection, pCaller, pCallback){
                if($(pCaller).hasClass('active')){
                    $(pCaller).removeClass('active');
                    $(pSection).hide();
                    pCallback('jump');
                } else {
                    pCallback();
                }
            };

            $('#nav .backToTop').on('click', function(){
                $(window).scrollTo(0, 800);
            });

            $("#termsCaller").on('click', function(){
                if($('.terms').length){
                    closeFooterSection('.privacy', '#privacyCaller', function(pMode){
                        if(pMode != 'jump'){
                            $('.terms').slideDown(function(){
                                $("#termsCaller").addClass('active');
                            });
                        } else {
                            $('.terms').show();
                            $("#termsCaller").addClass('active');
                        }
                        $(window).scrollTo($('.terms'), 800);
                    });
                }
            });
            $('.terms>.close').on('click', function(){
                if($('.terms').length){
                    $('.terms').slideUp(function(){
                        $("#termsCaller").removeClass('active');
                    });
                }
            });
            $("#privacyCaller").on('click', function(){
                if($('.privacy').length){
                    closeFooterSection('.terms', '#termsCaller', function(pMode){
                        if(pMode != 'jump'){
                            $('.privacy').slideDown(function(){
                                $("#privacyCaller").addClass('active');
                            });
                        } else {
                            $('.privacy').show();
                            $("#privacyCaller").addClass('active');
                        }
                        $(window).scrollTo($('.privacy').offset().top-62, 800);
                    });
                }
            });
            $('.privacy>.close').on('click', function(){
                if($('.privacy').length){
                    $('.privacy').slideUp(function(){
                        $("#privacyCaller").removeClass('active');
                    });
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

            $('#bannerArrow').on('click', function(){
                $(window).scrollTo($(window).height() - 62, 1000);
            });

            $('.social>.icon').on('click', function(){
                var parent = $(this).parent();
                if(!parent.hasClass('linkedIn')){
                    var content = $(this).parent().children('.socialContent');
                    if(parent.hasClass('active')){
                        parent.removeClass('active');
                        content.slideUp();
                    } else {
                        parent.addClass('active');
                        content.slideDown();
                    }
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

            var offsetCal = function(pMin, pMax, pCur){ return ((pCur - pMin) / (pMax - pMin)) * 100; };

            var checkNavStatus = function(){
                var scrollTop = $(window).scrollTop() || document.documentElement.scrollTop;
                var curPage = scrollTop / $(window).height();
                var offset = (curPage - Math.floor(curPage)) * 100;
                console.log(offset);
                var addClass = (offset) > 15;
                if(addClass){
                    if($('#nav').hasClass('active')){
                        $('#nav').addClass('active');
                    } else {
                        $('#nav').hide().addClass('active').fadeIn();
                    }
                } else {
                    $('#nav').removeClass('active');
                }

                var fwBannerOffset = offsetCal(0, 0.5, curPage);
                if(fwBannerOffset < 0){
                    fwBannerOffset  = 0;
                }
                $(".fw-banner>.txt-container>.txt").css({ 
                    'opacity': 1 - (fwBannerOffset * 2) / 100,
                    'top': (50 + (fwBannerOffset * 0.5)) + '%'
                });

                $('.scrollUp').each(function(){
                    // if(!$(this).hasClass('active')){
                        if($(window).scrollTop() - $(this).offset().top >= -$(window).height())
                            $(this).addClass('active');
                        else
                            $(this).removeClass('active');
                    // }
                });
            };
            checkNavStatus();

            $(window).scroll(function(){
                checkNavStatus();
            });

            window.hidePeopleDetail = function(){
                $('#aboutPeopleOwl').fadeOut();
            };

            window.showPeopleDetail = function(pHref){
                if(pHref){
                    $.ajax({
                        url: pHref,
                        type: 'get',
                        dataType: 'html',
                        success: function (data) {
                            $('#aboutPeopleOwl').html(data).fadeIn(function(){
                                $(window).scrollTo($('#aboutPeople'), 500);
                            });
                        }
                    });
                }
            };
        }
    };

    return module;

});
