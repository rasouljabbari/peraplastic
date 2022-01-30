$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

let indexProductsSwiper = new Swiper(".indexProductsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay : true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
let indexCertificateSwiper = new Swiper(".indexCertificateSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay : true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
let indexBlogSwiper = new Swiper(".indexBlogSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay : true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1990: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
let indexMemberSwiper = new Swiper(".indexMemberSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay : true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1990: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

let productsTopSlider = new Swiper(".productsTopSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let miniProductSlider = new Swiper(".miniProductSlider", {
    spaceBetween: 10,
    slidesPerView: 3,
    direction: "vertical",
    // freeMode: true,
    // watchSlidesProgress: true,
});
let largeProductSlider = new Swiper(".largeProductSlider", {
    spaceBetween: 10,
    thumbs: {
        swiper: miniProductSlider,
    },
});