var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    items:1,
    nav: true,
    navText: ['<i class="icon-arrow-left" aria-hidden="true"></i>','<i class="icon-arrow-right" aria-hidden="true"></i>'],
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
