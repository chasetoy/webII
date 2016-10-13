$(function() {
   $('.fancybox').fancybox();
});

$(window).on('load', function() {
    $('#slider').nivoSlider({
        effect: 'fade',
        controlNav: false,
        pauseOnHover: false,
        randomStart: true
    }); 
}); 