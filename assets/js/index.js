$(document).ready(function () {
    var e = $(".hamburger"), s = $(".overlay"), i = !1;
    e.click(function () {
        1 == i ? (s.hide(), e.removeClass("is-open"), e.addClass("is-closed"), i = !1) : (s.show(), e.removeClass("is-closed"), e.addClass("is-open"), i = !0)
    }), $('[data-toggle="offcanvas"]').click(function () {
        $("#wrapper").toggleClass("toggled")
    }), $(".leaflet-marker-icon").attr("src", "assets/images/pin-location.png")
});
let indexProductsSwiper = new Swiper(".indexProductsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: !0,
    breakpoints: {
        0: {slidesPerView: 1, spaceBetween: 50},
        450: {slidesPerView: 2, spaceBetween: 20},
        768: {slidesPerView: 2, spaceBetween: 10},
        1024: {slidesPerView: 3, spaceBetween: 20},
        1280: {slidesPerView: 4, spaceBetween: 20},
        1400: {slidesPerView: 5, spaceBetween: 20}
    }
}), indexCertificateSwiper = new Swiper(".indexCertificateSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: !0,
    breakpoints: {
        0: {slidesPerView: 1, spaceBetween: 50},
        450: {slidesPerView: 2, spaceBetween: 20},
        768: {slidesPerView: 3, spaceBetween: 30},
        1024: {slidesPerView: 5, spaceBetween: 50}
    }
}), indexBlogSwiper = new Swiper(".indexBlogSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: !0,
    breakpoints: {
        0: {slidesPerView: 1, spaceBetween: 0},
        576: {slidesPerView: 2, spaceBetween: 20},
        768: {slidesPerView: 2, spaceBetween: 30},
        1024: {slidesPerView: 3, spaceBetween: 20},
        1200: {slidesPerView: 4, spaceBetween: 20},
        1990: {slidesPerView: 5, spaceBetween: 20}
    }
}), indexMemberSwiper = new Swiper(".indexMemberSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {slidesPerView: 1, spaceBetween: 0},
        576: {slidesPerView: 2, spaceBetween: 30},
        992: {slidesPerView: 3, spaceBetween: 30},
        1240: {slidesPerView: 4, spaceBetween: 20},
        1990: {slidesPerView: 5, spaceBetween: 20}
    }
}), productsTopSlider = new Swiper(".productsTopSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }, pagination: {el: ".swiper-pagination", clickable: !0}
});

function showChart(e) {
    "chartMonth" === e ? ($("#chartDaily").addClass("dv-fade"), $("#chartDailyBtn").removeClass("active"), $("#chartYear").addClass("dv-fade"), $("#chartYearBtn").removeClass("active"), $(`#${e}`).removeClass("dv-fade"), $(`#${e}Btn`).addClass("active")) : "chartYear" === e ? ($("#chartDaily").addClass("dv-fade"), $("#chartDailyBtn").removeClass("active"), $("#chartMonth").addClass("dv-fade"), $("#chartMonthBtn").removeClass("active"), $(`#${e}`).removeClass("dv-fade"), $(`#${e}Btn`).addClass("active")) : ($("#chartMonth").addClass("dv-fade"), $("#chartMonthBtn").removeClass("active"), $("#chartYear").addClass("dv-fade"), $("#chartYearBtn").removeClass("active"), $(`#${e}`).removeClass("dv-fade"), $(`#${e}Btn`).addClass("active"))
}

$("body").hasClass("dv-rtl") ? ($(".dv-slick-slider-parent").attr("dir", "rtl"), $(".SimilarProductSlider").slick({
    rtl: !0,
    dots: !1,
    infinite: !1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, infinite: !0, dots: !0}}, {
        breakpoint: 992,
        settings: {slidesToShow: 2}
    }, {breakpoint: 768, settings: {slidesToShow: 1}}]
})) : $(".SimilarProductSlider").slick({
    dots: !1,
    infinite: !1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, infinite: !0, dots: !0}}, {
        breakpoint: 992,
        settings: {slidesToShow: 2}
    }, {breakpoint: 768, settings: {slidesToShow: 1}}]
}), $(document).ready(() => {
    $("#chartMonth").removeClass("dv-show"), $("#chartMonth").addClass("dv-fade"), $("#chartYear").removeClass("dv-show"), $("#chartYear").addClass("dv-fade"), $("#chartDailyBtn").addClass("active")
}), function () {
    function e(e) {
        return document.getElementById(e)
    }

    document.addEventListener("DOMContentLoaded", function () {
        var s = e("overlay"), i = e("progress"), a = e("progstat"), t = document.images, r = 0, n = t.length;
        if (0 == n) return o();

        function d() {
            var e = (100 / n * (r += 1) << 0) + "%";
            if (i.style.width = e, a.innerHTML = e, r === n) return o()
        }

        function o() {
            s.style.opacity = 0, setTimeout(function () {
                s.style.display = "none"
            }, 1200)
        }

        for (var l = 0; l < n; l++) {
            var c = new Image;
            c.onload = d, c.onerror = d, c.src = t[l].src
        }
    }, !1)
}();

$(document).scroll(function() {
    let scrollY = $(this).scrollTop();
    let pageWith = $(document).innerWidth();
    if(pageWith <= 768){
        if (scrollY >= 300) {
            $('.dv-custom-navbar').addClass('dv-custom-navbar-bg-dark');
            $('.dv-menu-in-mobile').addClass('dv-custom-navbar-bg-dark');
        } else {
            $('.dv-custom-navbar').removeClass('dv-custom-navbar-bg-dark');
            $('.dv-menu-in-mobile').removeClass('dv-custom-navbar-bg-dark');
        }
    }else{
        if (scrollY >= 500) {
            $('.dv-custom-navbar').addClass('dv-custom-navbar-bg-dark');
            $('.dv-menu-in-mobile').addClass('dv-custom-navbar-bg-dark');
        } else {
            $('.dv-custom-navbar').removeClass('dv-custom-navbar-bg-dark');
            $('.dv-menu-in-mobile').removeClass('dv-custom-navbar-bg-dark');
        }
    }
});