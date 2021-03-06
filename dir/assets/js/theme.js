/*

Theme: Purpose - Website UI Kit
Product Page: https://themes.getbootstrap.com/product/purpose-website-ui-kit/
Author: Webpixels
Author URI: https://www.webpixels.io

---

Copyright 2018 Webpixels

*/

"use strict";
$(window).on('load resize', function() {
    
    // Background image holder - Static hero with fullscreen autosize
    $('.spotlight')[0] && $('.spotlight').each(function() {
            
        var $this = $(this);
        var holderHeight;

        if ($this.data('spotlight') == 'fullscreen') {
            if ($this.data('spotlight-offset')) {
                var offsetHeight = $('body').find($this.data('spotlight-offset')).height();
                holderHeight = $(window).height() - offsetHeight;
            }
            else {
                holderHeight = $(window).height();
            }

            if ($(window).width() > 991) {
                $this.find('.spotlight-holder').css({
                    'height': holderHeight + 'px'
                });
            } 
            else {
                $this.find('.spotlight-holder').css({
                    'height': 'auto'
                });
            }
        }
    });
});

$(document).ready(function() {

    // Plugins init

    $(".highlight")[0] && hljs.initHighlightingOnLoad();
    $(".scrollbar-inner")[0] && $(".scrollbar-inner").scrollbar().scrollLock();
    $('[data-stick-in-parent="true"]')[0] && $('[data-stick-in-parent="true"]').stick_in_parent();
    $('.selectpicker')[0] && $('.selectpicker').selectpicker();
    $('.textarea-autosize')[0] && autosize($('.textarea-autosize'));
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').each(function() {
        var popoverClass = '';
        if($(this).data('color')) {
            popoverClass = 'popover-'+$(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover '+ popoverClass +'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });
    

    // Floating label
    $('.form-control').on('focus blur', function(e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
    

    // Custom input file
    $('.custom-input-file').each(function() {
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function(e) {
            var fileName = '';

            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('span').html(fileName);
            else
                $label.html(labelVal);
        });


        // Firefox bug fix
        $input.on('focus', function() {
            $input.addClass('has-focus');
        })
        .on('blur', function() {
            $input.removeClass('has-focus');
        });
    });
    
    
    // NoUI Slider
    if ($(".input-slider-container")[0]) {
        $('.input-slider-container').each(function() {

            var slider = $(this).find('.input-slider');
            var sliderId = slider.attr('id');
            var minValue = slider.data('range-value-min');
            var maxValue = slider.data('range-value-max');

            var sliderValue = $(this).find('.range-slider-value');
            var sliderValueId = sliderValue.attr('id');
            var startValue = sliderValue.data('range-value-low');

            var c = document.getElementById(sliderId),
                d = document.getElementById(sliderValueId);

            noUiSlider.create(c, {
                start: [parseInt(startValue)],
                connect: [true, false],
                //step: 1000,
                range: {
                    'min': [parseInt(minValue)],
                    'max': [parseInt(maxValue)]
                }
            });

            c.noUiSlider.on('update', function(a, b) {
                d.textContent = a[b];
            });
        })

    }

    if ($("#input-slider-range")[0]) {
        var c = document.getElementById("input-slider-range"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function(a, b) {
            f[b].textContent = a[b]
        })
    }


    // Scroll to anchor with scroll animation
    $('.scroll-me, [data-scroll-to], .toc-entry a').on('click', function(event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('scroll-to-offset') ? $(this).data('scroll-to-offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });


    // Count to (milestone counter)
    $(".milestone-count")[0] && $('.milestone-count').viewportChecker({
        callbackFunction: function(elem, action) {
            $('.milestone-count').countTo({
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                },
                onUpdate: function(value) {
                    //console.debug(this);
                },
                onComplete: function(value) {
                    $(this).addClass('counting-finished');
                }
            });
        }
    });


    // Countdown
    $(".countdown")[0] && $(".countdown").each(function() {
        var $this = $(this);
        var date = $this.data('countdown-date');

        $this.countdown(date).on('update.countdown', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!d</span></div>' +
                '<div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hr</span></div>' +
                '<div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div>' +
                '<div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>'
            ));
        });
    });


    // Typed JS
    $('[data-type-this]')[0] && $('[data-type-this]').each(function() {

        var element = $(this).attr('id');
        var strings = $(this).data('type-this');

        strings = strings.split(',');

        var typed = new Typed('#' + element, {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 70,
            loop: true
        });
    });


    // Swiper
    $(".swiper-js-container")[0] && $('.swiper-js-container').each(function(i, swiperContainer) {

        var $swiperContainer = $(swiperContainer);
        var $swiper = $swiperContainer.find('.swiper-container');

        var swiperEffect = $swiper.data('swiper-effect');
        var swiperDirection = !$swiper.data('swiper-direction') ? 'horizontal' : $swiper.data('swiper-direction');

        var slidesPerViewXs = $swiper.data('swiper-xs-items');
        var slidesPerViewSm = $swiper.data('swiper-sm-items');
        var slidesPerViewMd = $swiper.data('swiper-md-items');
        var slidesPerViewLg = $swiper.data('swiper-items');
        var spaceBetweenSlidesXs = $swiper.data('swiper-xs-space-between');
        var spaceBetweenSlidesSm = $swiper.data('swiper-sm-space-between');
        var spaceBetweenSlidesMd = $swiper.data('swiper-md-space-between');
        var spaceBetweenSlidesLg = $swiper.data('swiper-space-between');


        // Slides per view written in data attributes for adaptive resoutions
        slidesPerViewXs = !slidesPerViewXs ? slidesPerViewLg : slidesPerViewXs;
        slidesPerViewSm = !slidesPerViewSm ? slidesPerViewLg : slidesPerViewSm;
        slidesPerViewMd = !slidesPerViewMd ? slidesPerViewLg : slidesPerViewMd;
        slidesPerViewLg = !slidesPerViewLg ? 1 : slidesPerViewLg;

        // Space between slides written in data attributes for adaptive resoutions
        spaceBetweenSlidesXs = !spaceBetweenSlidesXs ? 0 : spaceBetweenSlidesXs;
        spaceBetweenSlidesSm = !spaceBetweenSlidesSm ? 0 : spaceBetweenSlidesSm;
        spaceBetweenSlidesMd = !spaceBetweenSlidesMd ? 0 : spaceBetweenSlidesMd;
        spaceBetweenSlidesLg = !spaceBetweenSlidesLg ? 0 : spaceBetweenSlidesLg;


        var animEndEv = 'webkitAnimationEnd animationend';

        var $swiper = new Swiper($swiper, {
            pagination: {
                el: $swiperContainer.find('.swiper-pagination'),
                clickable: true
            },
            nextButton: $swiperContainer.find('.swiper-button-next'),
            prevButton: $swiperContainer.find('.swiper-button-prev'),
            slidesPerView: slidesPerViewLg,
            spaceBetween: spaceBetweenSlidesLg,
            initialSlide: $swiper.data('initial-slide'),
            autoplay: $swiper.data('swiper-autoplay'),
            autoHeight: $swiper.data('swiper-autoheight'),
            centeredSlides: $swiper.data('swiper-centered-slides'),
            mousewheel: false,
            grabCursor: true,
            effect: swiperEffect,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 4,
                slideShadows: false
            },
            speed: 800,
            direction: swiperDirection,
            preventClicks: true,
            preventClicksPropagation: true,
            observer: true,
            observeParents: true,
            breakpoints: {
                575: {
                    slidesPerView: slidesPerViewXs,
                    spaceBetweenSlides: spaceBetweenSlidesXs
                },
                767: {
                    slidesPerView: slidesPerViewSm,
                    spaceBetweenSlides: spaceBetweenSlidesSm
                },
                991: {
                    slidesPerView: slidesPerViewMd,
                    spaceBetweenSlides: spaceBetweenSlidesMd
                },
                1199: {
                    slidesPerView: slidesPerViewLg,
                    spaceBetweenSlides: spaceBetweenSlidesLg
                }
            }
        });
    });

    // Isotope for masonry layouts
    $('.masonry-container')[0] && $('.masonry-container').each(function(i, masonryContainer) {
        var $masonryContainer = $(masonryContainer);

        // init isotope for container
        var $masonry = $masonryContainer.find('.masonry').imagesLoaded(function() {

            // Set default filter if exists
            var filterMenuItems = $masonryContainer.find('.masonry-filter-menu');
            var defaultFilterButton = filterMenuItems.find('.default');
            var defaultFilterValue = defaultFilterButton.data('filter');

            if (defaultFilterValue != undefined && defaultFilterValue != '') {

                if (defaultFilterValue != '*') {
                    defaultFilterValue = '.' + defaultFilterValue;
                }

                defaultFilterButton.addClass('active');
            }


            $masonry.isotope({
                itemSelector: '.masonry-item',
                filter: defaultFilterValue
            })
        });
        // init filters for container
        $masonryContainer.find('.masonry-filter-menu').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');

            if (filterValue == '*') {
                filterValue = '';
            } else {
                filterValue = '.' + filterValue;
            }

            $masonry.isotope({
                filter: filterValue
            });
        });
    });

    $('.masonry-filter-menu')[0] && $('.masonry-filter-menu').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });


    // Background image holder - Takes the img and transforms it in a bg image
    $(".bg-img-holder")[0] && $(".bg-img-holder").each(function(){
        var $this = $(this);
        var img = $this.children("img").attr("src");

        $this.css("background-image",'url("'+img+'")').css("background-position","initial").css("opacity","1")
    });


    // Pricing switcher
    $('.pricing-container')[0] && $('.pricing-container button[data-pricing]').click(function() {
        var $this = $(this);
        var a = $this.data('pricing'),
            b = $this.parents('.pricing-container'),
            c = $('.'+b.attr('class')+' [data-pricing-value]');

   
        if(!$this.hasClass('active')) {
            // Toggle active classes for monthly/yearly buttons
            $('.'+b.attr('class')+' button[data-pricing]').removeClass('active');
            $this.addClass('active');

            // Change price values
            c.each(function() {
                var new_val = $(this).data('pricing-value');
                var old_val = $(this).find('span.price').text();

                $(this).find('span.price').text(new_val);
                $(this).data('pricing-value', old_val);
            });
        }
    });


    // Containers with animated elements on hover

    $('[data-animate-items="hover"]')[0] && $('[data-animate-items="hover"]').hover(function() {
        var $this = $(this);
        var elems = $this.find(".animate-item");
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var item = $(this);

            var animationIn = item.data('animation-in'),
                animationDelay = item.data('animation-delay') ? item.data('animation-delay') : 0;

            setTimeout(function() {
                item.addClass('animated ' + animationIn, 100).on(animEndEv, function() {
                    $this.addClass('animation-ended');
                    item.removeClass('animated '+animationIn);
                });
            }, animationDelay);
        });
    }, function() {
        var $this = $(this);
        var elems = $this.find(".animate-item");
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var item = $(this);

            var animationOut = item.data('animation-out'),
                animationDelay = item.data('animation-delay') ? item.data('animation-delay') : 0;

            setTimeout(function() {
                item.addClass('animated '+animationOut, 100).on(animEndEv, function() {
                    $this.removeClass('animation-ended');
                    item.removeClass('animated animation-ended '+animationOut);
                });
            }, 0);
        });
    });


    // Quick product view (requires Fancybox 3)

    $(".quick_view")[0] && $(".quick_view").fancybox({
        baseClass: 'quick-view-container',
        infobar: false,
        buttons: false,
        thumbs: true,
        margin: 0,
        touch: {
            vertical: false
        },
        animationEffect: false,
        transitionEffect: "slide",
        transitionDuration: 500,
        baseTpl: '<div class="fancybox-container" role="dialog">' +
            '<div class="quick-view-content">' +
            '<div class="quick-view-carousel">' +
            '<div class="fancybox-stage"></div>' +
            '</div>' +
            '<div class="quick-view-aside"></div>' +
            '<button data-fancybox-close class="quick-view-close">X</button>' +
            '</div>' +
            '</div>',

        onInit: function (instance) {

            // Create bullet navigation links

            var bullets = '<ul class="quick-view-bullets">';

            for (var i = 0; i < instance.group.length; i++) {
                bullets += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
            }

            bullets += '</ul>';

            $(bullets).on('click touchstart', 'a', function () {
                    var index = $(this).data('index');

                    $.fancybox.getInstance(function () {
                        this.jumpTo(index);
                    });

                })
                .appendTo(instance.$refs.container.find('.quick-view-carousel'));


            // 2 Add product form

            var $element = instance.group[instance.currIndex].opts.$orig;
            var form_id = $element.data('qw-form');
            
            instance.$refs.container.find('.quick-view-aside').append(

                // In this example, this element contains the form
                $('#' + form_id).clone(true).removeClass('d-none')
            );

        },

        beforeShow: function (instance) {

            // Mark current bullet navigation link as active

            instance.$refs.container.find('.quick-view-bullets')
                .children()
                .removeClass('active')
                .eq(instance.currIndex)
                .addClass('active');
        }
    });

    
    $("body").on("click touchstart", "[data-action]", function(e) {

        e.preventDefault();

        var $this = $(this);
        var action = $this.data('action');
        var target = '';

        switch (action) {
            case "offcanvas-open":
                target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
                break;
            case "offcanvas-close":
                target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
                break;

            case 'aside-open':
                target = $this.data('target');
                $this.data('action', 'aside-close');
                $this.addClass('toggled');
                $(target).addClass('toggled');
                $('.content').append('<div class="body-backdrop" data-action="aside-close" data-target='+target+' />');
                break;


            case 'aside-close':
                target = $this.data('target');
                $this.data('action', 'aside-open');
                $('[data-action="aside-open"], '+target).removeClass('toggled');
                $('.content, .header').find('.body-backdrop').remove();
                break;
        }
    })
});