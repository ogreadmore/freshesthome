$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);


});


jQuery(function ($) {

    "use strict";
    /* ===================================
           Header appear
        ====================================== */
    if($('.slider-area').length) {
        var slider_top = $(".slider-area").offset().top;

        $(window).on('scroll', function () {

            if ($(this).scrollTop() > 260) { // Set position from top to add class
                if($('.slider-area').css({"margin-top":slider_top})) {
                    $('.inner-header').addClass('header-appear');
                }
            } else {
                if($('.slider-area').css({"margin-top":"0"})) {
                    $('.inner-header').removeClass('header-appear');
                }
            }
        });
    }
    if($('.slider-sec').length) {
        var slider_height = $(".slider-sec").offset().top;
        $(window).on('scroll', function () {

            if ($(this).scrollTop() > 260) { // Set position from top to add class
                if($('.slider-sec').css({"margin-top":slider_height})) {
                    $('.inner-header').addClass('header-appear');
                }
            } else {
                if($('.slider-sec').css({"margin-top":"0"})) {
                    $('.inner-header').removeClass('header-appear');
                }
            }
        });
    }

    /* ===================================
         arrow appear and scroll to top
     ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top-arrow').fadeIn('slow');
        }else {
            $('.scroll-top-arrow').fadeOut('slow');
        }
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(document).on('click', '.home', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ===================================
           Navbar smooth Scroll
       ====================================== */

    if($('.portfolio-sec').length) {
        var port_target = $('.portfolio-sec').offset().top;
    }

    jQuery ( document ).ready ( function($) {

        var hash= window.location.hash;

        // if ( hash == '' || hash == '#' || hash == undefined ) return false;

        var target = $(hash);

        // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (hash === "#company-portfolio-section") {
            var new_height = port_target - 820;
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: new_height  //offsets for fixed header
                }, 'linear');

            }
        } else if (hash === "#about-sec") {
            if (target.length) {
                var about_top = target.offset().top - 0; // keep consistent with in-page scroll offset
                $('html,body').stop().animate({
                    scrollTop: about_top
                }, 'linear');
            }
        }

    });

    if($(".scroll").length) {
        $(".scroll").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 0
                }, 400, function () {

                    window.location.hash = hash;
                });
            }
        });
    }


    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
            $('body').addClass('menu-open');
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            $('body').removeClass('menu-open');
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            $('body').removeClass('menu-open');
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            $('body').removeClass('menu-open');
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }


    /* =====================================
          Parallax
       ====================================== */

    if($(window).width() < 780) {
        $('.parallax').addClass("parallax-disable");
    } else {
        $('.parallax').removeClass("parallax-disable");

        // parallax
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
                Mouse parallax
    ====================================== */

    if($(window).width() > 780) {
        $('.slider-area,.slider-sec,header').mousemove(function (e) {
            $('[data-depth]').each(function () {
                var depth = $(this).data('depth');
                var amountMovedX = (e.pageX * -depth / 4);
                var amountMovedY = (e.pageY * -depth / 4);

                $(this).css({
                    'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                });
            });
        });
    }
    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider

    $('.team-carousel').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots:false,
        autoplay: true,
        margin:30,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    $('#team-next').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('#team-prev').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* ===================================
           slick for testimonial
     ====================================== */

    $('.testimonial-box').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });

    // Testimonial up/down arrow controls (match hero behavior)
    $('#testimonial-arr-up').click(function() {
        var owl = $('.testimonial-box');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('#testimonial-arr-down').click(function() {
        var owl = $('.testimonial-box');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });
    /* =====================================
                    sponsers  carousel
        ====================================== */

    $('.sponser-tags').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            },
        }

    });

    /* =====================================
             slick for slider
     ====================================== */
    $(document).ready(function(){
        $('.slider-detail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            active:true,
            // fade: true,
            asNavFor: '.slider-img',
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true
        });
        $('.slider-img').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-detail',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true
        });
        $('.slider-arr-up').click(function(){
            $('.slider-img').slick('slickNext');
        });
        $('.slider-arr-down').click(function(){
            $('.slider-img').slick('slickPrev');
        });

    });


    /* =====================================
             circular bars
     ====================================== */

    $(".circular-wrap").appear(function () {
        $(".circle").circleProgress({
            size: 210,
            lineCap: "round",
            fill: {
                gradient: ["#0b2340", "#0b2340"]
            },
        });
    });


    $(".circular-wrap.dark").appear(function () {
        $('.myskill').circleProgress({
            lineCap: "round",
            size: 200,
        });
    });

    /* ===================================
                 Wow Effects
       ======================================*/
    var wow = new WOW(
        {
            boxClass:'wow',      // default
            animateClass:'animated', // default
            offset:0,          // default
            mobile:false,       // default
            live:true        // default
        }
    );
    wow.init();


    /* ===================================
           Cube Portfolio Initializing
    ======================================*/
    if($('#js-grid-mosaic').length) {
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
        .on('initComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");

                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");

                }
            });
        })
        .on('onAfterLoadMore.cbp', function () {
            // your functionality
            var $this = $(this);
            $("#js-loadMore-lightbox-gallery a").addClass("d-none");
            $("#js-loadMore-lightbox-gallery").addClass("active-outer");
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        })
        .on('filterComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
                $("#js-loadMore-lightbox-gallery").removeClass("d-none");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
                $("#js-loadMore-lightbox-gallery").addClass("d-none");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        });
    }

    //onmousehover
    $('.simple-navbar ul li a').each(function () {
        var count = $(this).children('[data-count]');
        $(this).mouseenter(function() {
            if(count.data('count')>3) {
                count.prop('Counter', 0).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }else{
                count.prop('Counter', 8).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }
        });
    });
    /* ===================================
         Animated Cursor
       ====================================== */


    function animatedCursor() {

        if ($(".aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1,
                cursorEl = document.querySelector('.cursor'),
                i = document.getElementsByClassName("cursor-loader");
            // Center via CSS translate(-50%,-50%); update position via left/top in viewport coords
            document.addEventListener("mousemove", function (evt) {
                e.x = evt.clientX; e.y = evt.clientY;
            }), TweenLite.ticker.addEventListener("tick", function () {
                if (!o && cursorEl) {
                    t.x += (e.x - t.x) * n;
                    t.y += (e.y - t.y) * n;
                    cursorEl.style.left = t.x + 'px';
                    cursorEl.style.top = t.y + 'px';
                }
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(cursorEl, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(cursorEl, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    // Compute using viewport coordinates; no manual scroll offset needed
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.clientX - i.left, r = n.clientY - i.top, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2) / o, TweenMax.to(cursorEl, .3, {
                        left: t.x,
                        top: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.clientX - u.left, f = s.clientY - u.top, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                // Elements that should hide the cursor entirely
                $(".hide-cursor,.tp-bullets").mouseenter(function () {
                    TweenMax.to(".cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0});
                });
                $(".hide-cursor,.tp-bullets").mouseleave(function () {
                    TweenMax.to(".cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1, backgroundColor: "rgba(255,255,255,0)"});
                });

                // Apply "link hover" effect to all anchors site‑wide (incl. buttons)
                $("a").mouseenter(function () {
                    TweenMax.to(".cursor", .2, {
                        borderWidth: "0px",
                        scale: 3,
                        backgroundColor: "rgba(5,5,5,0.27)",
                        opacity: .15
                    });
                });
                $("a").mouseleave(function () {
                    TweenMax.to(".cursor", .3, {
                        borderWidth: "2px",
                        scale: 1,
                        backgroundColor: "rgba(255,255,255,0)",
                        opacity: 1
                    });
                });

        }

    }

    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
        $('header .side-menu').mouseenter(function () {
            $('header ~ .aimated-cursor').addClass('magic');
        });
        $('header .side-menu').mouseleave(function () {
            $('header ~ .aimated-cursor').removeClass('magic');
        });
    }

    else{

        $('.aimated-cursor').addClass('magic');

    }


});
