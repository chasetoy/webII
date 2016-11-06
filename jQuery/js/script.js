$(function(){
    $('#slider').nivoSlider({
        effect: 'fade',
        controlNav: false,
        pauseOnHover: false,
        randomStart: true
    });
});

$(function() {
   $('.fancybox').fancybox();
   $( '.tooltip' ).tooltip();
   $('#datepicker').datepicker();
});
