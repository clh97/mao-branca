$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            1024: {
                items: 2,
                nav: true,
                loop: true
            }
        },
        navText: ["<img class='owl-left' src='img/left-arrow.svg'>", "<img class='owl-right' src='img/right-arrow.svg'>"]
    })
})