$(document).ready(function(e){

    $('.myrange').on('input', function(e){
        $('.up_to').text($(this).val())
    });

    $('.header_form').hover(function(e){
        $('.search_button').toggleClass('active');
    });

    $('.products_count').hover(function(e){
        $('.products_count svg').toggleClass('active');
    });
    $('.profil').hover(function(e){
        $('.profil svg').toggleClass('active');
    });

    // index SWIPER
    var swiper = new Swiper(".mySwiper", {

        slidesPerView: 2,
        spaceBetween: 21,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
        },
    });

    // filter swiper 
    var productSwiper = new Swiper(".productSwiper", {

        slidesPerView: 4,
        spaceBetween: 10,
        loop:true,

        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
        },
    });

    

})
