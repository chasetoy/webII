$(function() {

    $('#slider').nivoSlider({
        effect: 'fade',
        controlNav: true,
        pauseOnHover: false,
        randomStart: true
    });

    $( "#accordion" ).accordion({
        collapsible : true
    });

    $( '.tooltip' ).tooltip();
    $('#tabs').tabs();
    $('#datepicker').datepicker();
    $('#controlgroup').controlgroup();
});