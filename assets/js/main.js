(function($) {
    ("use strict");
    // Page loading
    $(window).on("load", function () {
        $("#preloader-active").fadeOut("slow");
    });
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $(".sticky-bar");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass("stick");
            $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
            $(".header-style-2 .categories-button-active").removeClass("open");
        } else {
            header.addClass("stick");
        }
    });

    /*-----------------
        Sidebar Sticky
    -----------------*/
    var sidebar = $(".sidebar-left");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 760) {
            sidebar.removeClass("stick");
        } else {
            sidebar.addClass("stick");
        }
    });
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    /*------ Wow Active ----*/
    new WOW().init();
    //sidebar sticky
    if ($(".sticky-sidebar").length) {
        $(".sticky-sidebar").theiaStickySidebar();
    }
    /*----------------------------
        Category toggle function
    ------------------------------*/
    if ($(".categories-button-active").length) {
        var searchToggle = $(".categories-button-active");
        searchToggle.on("click", function (e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).siblings(".categories-dropdown-active-large").removeClass("open");
            } else {
                $(this).addClass("open");
                $(this).siblings(".categories-dropdown-active-large").addClass("open");
            }
        });
    }
    /*---------------------
        Select active
    --------------------- */
    if ($(".select-active").length) {
        $(".select-active").select2();
    }
    /*---- CounterUp ----*/
    if ($(".count").length) {
        $(".count").counterUp({
            delay: 10,
            time: 600
        });
    }
    // Isotope active
    if ($(".grid").length) {
        $(".grid").imagesLoaded(function () {
            // init Isotope
            var $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                layoutMode: "masonry",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: ".grid-item"
                }
            });
        });
    }
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $(".search-active"),
            endTriggersearch = $(".search-close"),
            container = $(".main-search-active");
        searchTrigger.on("click", function (e) {
            e.preventDefault();
            container.addClass("search-visible");
        });
        endTriggersearch.on("click", function () {
            container.removeClass("search-visible");
        });
    }
    sidebarSearch();
    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".burger-icon"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            wrapper4 = $("body");
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on("click", function (e) {
            navbarTrigger.toggleClass("burger-close");
            e.preventDefault();
            container.toggleClass("sidebar-visible");
            wrapper4.toggleClass("mobile-menu-active");
            window.scrollTo(0, 0);
        });
        endTrigger.on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });
        $(".body-overlay-1").on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
            navbarTrigger.removeClass("burger-close");
        });
    }
    mobileHeaderActive();
    /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $(".mobile-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });
    /*--- language currency active ----*/
    $(".mobile-language-active").on("click", function (e) {
        e.preventDefault();
        $(".lang-dropdown-active").slideToggle(900);
    });
    /*--- categories-button-active-2 ----*/
    $(".categories-button-active-2").on("click", function (e) {
        e.preventDefault();
        $(".categori-dropdown-active-small").slideToggle(900);
    });
    /*--- Mobile demo active ----*/
    var demo = $(".tm-demo-options-wrapper");
    $(".view-demo-btn-active").on("click", function (e) {
        e.preventDefault();
        demo.toggleClass("demo-open");
    });
    /*-----More Menu Open----*/
    $(".more_slide_open").slideUp();
    $(".more_categories").on("click", function () {
        $(this).toggleClass("show");
        $(".more_slide_open").slideToggle();
    });
    /* --- SwiperJS --- */
    $(".swiper-group-6").each(function () {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 6,
            slidesPerGroup: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination-group-6",
                clickable: true
            },
            autoplay: {
                delay: 2000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 6
                },
                800: {
                    slidesPerView: 5
                },
                600: {
                    slidesPerView: 4
                },
                400: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                150: {
                    slidesPerView: 2
                }
            }
        });
    });
    $(".swiper-group-4").each(function () {
        var swiper_4_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-4",
                prevEl: ".swiper-button-prev-group-4"
            },
            pagination: {
                el: ".swiper-pagination-group-4",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 4
                },
                1100: {
                    slidesPerView: 3
                },
                780: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                350: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-3-slider").each(function () {
        var swiper_3_items_2 = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-style-2",
                prevEl: ".swiper-button-prev-style-2"
            },
            pagination: {
                el: ".swiper-pagination-style-2",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            on: {
                beforeInit: function () {
                    // set padding left slide fleet
                    var leftTitle = 0;

                    var titleFleet = $(".title-padding-left");
                    if (titleFleet.length > 0) {
                        leftTitle = titleFleet.offset().left;
                    }
                    if ($(".box-slide-customers").length > 0) {
                        $(".box-slide-customers").css("padding-left", leftTitle + "px");
                    }
                }
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-customers-2").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-customers",
                prevEl: ".swiper-button-prev-customers"
            },
            pagination: {
                el: ".swiper-pagination-customers",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            on: {
                beforeInit: function () {
                    // set padding left slide fleet
                    var leftTitle = 0;

                    var titleFleet = $(".title-padding-left");
                    if (titleFleet.length > 0) {
                        leftTitle = titleFleet.offset().left;
                    }
                    if ($(".box-slide-customers").length > 0) {
                        $(".box-slide-customers").css("padding-left", leftTitle + "px");
                    }
                }
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-1").each(function () {
        var swiper_1_items = new Swiper(this, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 5000
            }
        });
    });

    //Dropdown selected item
    $(".dropdown-menu > li a").on("click", function (e) {
        e.preventDefault();
        $(this)
            .parents(".dropdown")
            .find(".btn span")
            .html($(this).html() + "");
        $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
    });

    // Video popup
    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    // Init function billed

    /*------ Timer Countdown ----*/
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime("" + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%D</span><span class="countdown-period lh-14 font-xs"> days </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%H</span><span class="countdown-period font-xs lh-14"> hours </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%M</span><span class="countdown-period font-xs lh-14"> mins </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%S</span><span class="countdown-period font-xs lh-14"> secs </span></span>'));
        });
    });

    //Mobile left sideba
    function mobileLeftSidebar() {
        var width = $(window).width();
        if (width < 992) {
            $(".menu-texts li.has-children > a").removeAttr("href");
            $(".menu-texts li.has-children > a").on("click", function (e) {
                $(this).parent().toggleClass("submenu-open");
                $(this).parent().siblings().removeClass("submenu-open");
            });
        }
    }
    mobileLeftSidebar();

    // hide notify
    $(".btn-close").on("click", function () {
        $(".box-notify").hide(function () {
            $(".sidebar-left").css("top", "");
        });
    });

    // init var swiper
    var swiper_1 = null;

    $(document).on("click", function (event) {
        var $trigger = $(".box-dropdown-cart");
        var $triggerSearch = $(".box-search-top");
        if ($triggerSearch !== event.target && !$triggerSearch.has(event.target).length) {
            $(".form-search-top").slideUp();
        }
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdown-account").removeClass("dropdown-open");
            $(".dropdown-cart").removeClass("dropdown-open");
        }
    });

    $(".icon-account").on("click", function () {
        $(".dropdown-account").toggleClass("dropdown-open");
    });

    $(".icon-cart").on("click", function () {
        $(".dropdown-cart").toggleClass("dropdown-open");
    });

    $(".search-post").on("click", function () {
        if ($(".form-search-top").css("display") == "none") {
            $(".form-search-top").slideDown();
        } else {
            $(".form-search-top").slideUp();
        }
    });

    $(".change-price-plan li a").on("click", function (e) {
        e.preventDefault();
        $(".change-price-plan li a").removeClass("active");
        $(this).addClass("active");
        var type = $(this).attr("data-type");
        if (type == "monthly") {
            $(".text-price-standard").html("$29");
            $(".text-type-standard").html("- user / month");
            $(".text-price-business").html("$99");
            $(".text-type-business").html("- user / month");
            $(".text-price-enterprise").html("$299");
            $(".text-type-enterprise").html("- user / month");
        } else {
            $(".text-price-standard").html("$348");
            $(".text-type-standard").html("- user / year");
            $(".text-price-business").html("$1,188");
            $(".text-type-business").html("- user / year");
            $(".text-price-enterprise").html("$3,588");
            $(".text-type-enterprise").html("- user / year");
        }
    });
    $(".change-media li a").on("click", function (e) {
        e.preventDefault();
        $(".change-media li a").removeClass("active");
        $(this).addClass("active");
        var type = $(this).attr("data-type");
        $(".social-media").hide();
        $("." + type).show();
    });
    $(".enterprise").hide();

    $(".button-click").on("click", function (e) {
        e.preventDefault();
        $(".button-click").removeClass("active");
        $(this).addClass("active");
        var type = $(this).attr("data-type");
        if (type == "all") {
            $(".item-article").show();
        } else {
            $(".item-article").hide();
            $("." + type).show();
        }
    });

    // SLick
    $(".product-image-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: ".slider-nav-thumbnails"
    });

    $(".slider-nav-thumbnails").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".product-image-slider",
        dots: false,
        focusOnSelect: true,
        vertical: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>'
    });

    $(".list-terms li a").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("href");
        var _top = $(id).offset().top - 90;
        $("html,body").animate({scrollTop: _top}, 500);
    });
})(jQuery);
// Check billed
function switchBilled() {
    var checkBox = $("#cb_billed_type");
    var forMonth = $(".for-month");
    var forYear = $(".for-year");
    var billMonth = $(".text-billed-month");
    var billYear = $(".text-billed-year");
    for (var i = 0; i < forMonth.length; i++) {
        if (checkBox.is(":checked")) {
            forYear.eq(i).addClass("display-year");
            billYear.addClass("active");
            billMonth.removeClass("active");
            forMonth.eq(i).removeClass("display-month");
        } else {
            forYear.eq(i).removeClass("display-year");
            billMonth.addClass("active");
            billYear.removeClass("active");
            forMonth.eq(i).addClass("display-month");
        }
    }
}
var swiper_3_customers = null;
var swiper_4_customers = null;
function initSwiper3Item() {
    // if (swiper_3_customers) {
    //     swiper_3_customers.destroy();
    // }
    swiper_3_customers = new Swiper(".swiper-group-3-customers", {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-customers",
            prevEl: ".swiper-button-prev-customers"
        },
        pagination: {
            el: ".swiper-pagination-customers",
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        on: {
            beforeInit: function () {
                // set padding left slide fleet
                var leftTitle = 0;

                var titleFleet = $(".title-padding-left");
                if (titleFleet.length > 0) {
                    leftTitle = titleFleet.offset().left;
                }
                if ($(".box-slide-customers").length > 0) {
                    $(".box-slide-customers").css("padding-left", leftTitle + "px");
                }
            }
        },
        breakpoints: {
            1199: {
                slidesPerView: 4
            },
            800: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            },
            400: {
                slidesPerView: 1
            },
            250: {
                slidesPerView: 1
            }
        }
    });
}
function initSwiper4Item() {
    if (swiper_4_customers) {
        swiper_4_customers.destroy();
    }
    swiper_4_customers = new Swiper(".swiper-group-4-customers", {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-customers",
            prevEl: ".swiper-button-prev-customers"
        },
        pagination: {
            el: ".swiper-pagination-customers",
            clickable: true
        },
        autoplay: {
            delay: 10000
        },
        on: {
            beforeInit: function () {
                // set padding left slide fleet
                var leftTitle = 0;

                var titleFleet = $(".title-padding-left");
                if (titleFleet.length > 0) {
                    leftTitle = titleFleet.offset().left;
                }
                if ($(".box-slide-customers").length > 0) {
                    $(".box-slide-customers").css("padding-left", leftTitle + "px");
                }
            }
        },
        breakpoints: {
            1199: {
                slidesPerView: 4
            },
            800: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            },
            400: {
                slidesPerView: 1
            },
            250: {
                slidesPerView: 1
            }
        }
    });
}

var timer;
var timer2;
window.addEventListener("resize", function () {
    if (timer) {
        clearTimeout(timer);
    }
    if ($(".swiper-group-3-customers").length > 0) {
        timer = setTimeout(initSwiper3Item, 400);
    }
    if (timer2) {
        clearTimeout(timer2);
    }
    if ($(".swiper-group-4-customers").length > 0) {
        timer = setTimeout(initSwiper4Item, 400);
    }
});

if ($(".swiper-group-3-customers").length > 0) {
    initSwiper3Item();
}
if ($(".swiper-group-4-customers").length > 0) {
    initSwiper4Item();
}

function initSwiperTab(idx) {
    if ($(".swiper-tab-" + idx + "").length == 0) {
        return;
    }
    return new Swiper('.swiper-tab-' + idx + '', {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-tab-" + idx,
            prevEl: ".swiper-button-prev-tab-" + idx
        },
        autoplay: {
            delay: 10000
        }
    });
}

//Perfect Scrollbar
if ($(".mobile-header-wrapper-inner").length) {
    const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
}