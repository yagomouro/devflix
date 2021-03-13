// Configurações do Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// Header scroll

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("scroll");
    } else {
        $(".header").removeClass("scroll");
    }
});

// Header hide
var prev = 0;
var $window = $(window);
var nav = $('.header');

$window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});