$(function() {
//    $('#example1').html('<h1>Replacement heading</h1>');
//    $('#example1 p').text('Replacement text for paragraph');
//    $('#example1').append('<p>This is now the last paragraph.</p>').after('<p>This paragraph is outside of our div.</p>');

//    $('#example1').prepend('<p>This is now our first  paragraph</p>');
//    $('#example1').before('<p>This is now before our div</p>');

//    $('#example1').remove();

/*
    $('#changebg').on('click', function(){
        $('body').toggleClass('altbg');
    });
*/

    $('p').css({
        'border' : '0.125rem solid #00d492',
        'padding' : '1.25rem'
    });

    $('#changebg').on('click', function(){
        $('p').removeAttr('style');
    });

    $('.exampleimg').attr('src', 'drone.jpeg');

    $('span.pq').each(function(){
        var quote = $(this).clone();
        quote.removeClass('pq').addClass('pullquote');
        $(this).before(quote);
        $(this).css('text-decoration', 'underline');
    });

    

});