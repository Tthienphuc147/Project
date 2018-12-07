$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('white');
    }
    else
    {
        $('#header').removeClass('white');
    }

    $('.menu_respon').css('position','fixed');
});

$(document).ready(function(){

    $(".toggle").click(function(){
        $('.menu_respon').slideToggle(1500);       
    });
   

    $(window).resize(function(){
        if($(window).width() > 576) {
            $('.menu_respon').css('display', 'none');
        }
    });
});