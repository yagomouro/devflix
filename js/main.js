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
            items: 3
        }
    }
})

// Header scroll

$(window).scroll(function () {
    if ($(window).scrollTop() > 50){
        $(".header").addClass("scroll");
    }
    else{
        $(".header").removeClass("scroll");
    }
});

