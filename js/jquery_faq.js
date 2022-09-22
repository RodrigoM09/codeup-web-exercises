$('#toggler').click(function () {
    $('.invisible').toggle().css('visibility', 'unset');
});

$('#styler').click(function (){
    $('ul > li:last-child').toggle().css('background-color', 'yellow')
});
