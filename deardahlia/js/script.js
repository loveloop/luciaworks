$(function () {
    $('#nav').removeClass('on');
    $('.hamBtn').on('click', function () {
        $('#nav').addClass('on');
    });
            
    $('.navClose').on('click', function () {
        $('#nav').removeClass('on');
    });
});