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
    autoplay: true,
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
    autoplay: true,
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
    autoplay: true,
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
    autoplay: true,
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

if($('body').hasClass('dv-rtl')){
    $('.dv-slick-slider-parent').attr('dir' , 'rtl')
    $('.SimilarProductSlider').slick({
        rtl: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}else{
    $('.SimilarProductSlider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}

$(document).ready(() => {
    $('#chartMonth').removeClass('dv-show')
    $('#chartMonth').addClass('dv-fade')
    $('#chartYear').removeClass('dv-show')
    $('#chartYear').addClass('dv-fade')
    $('#chartDailyBtn').addClass('active')
})

function showChart(value) {

    if (value === 'chartMonth') {
        $('#chartDaily').addClass('dv-fade')
        $('#chartDailyBtn').removeClass('active')
        $('#chartYear').addClass('dv-fade')
        $('#chartYearBtn').removeClass('active')

        $(`#${value}`).removeClass('dv-fade')
        $(`#${value}Btn`).addClass('active')
    } else if (value === 'chartYear') {
        $('#chartDaily').addClass('dv-fade')
        $('#chartDailyBtn').removeClass('active')
        $('#chartMonth').addClass('dv-fade')
        $('#chartMonthBtn').removeClass('active')

        $(`#${value}`).removeClass('dv-fade')
        $(`#${value}Btn`).addClass('active')
    } else {
        $('#chartMonth').addClass('dv-fade')
        $('#chartMonthBtn').removeClass('active')
        $('#chartYear').addClass('dv-fade')
        $('#chartYearBtn').removeClass('active')

        $(`#${value}`).removeClass('dv-fade')
        $(`#${value}Btn`).addClass('active')
    }
}

(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
        if(tot == 0) return doneLoading();

        function imgLoaded(){
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            prog.style.width = perc;
            stat.innerHTML = perc;
            if(c===tot) return doneLoading();
        }
        function doneLoading(){
            ovrl.style.opacity = 0;
            setTimeout(function(){
                ovrl.style.display = "none";
            }, 1200);
        }
        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());