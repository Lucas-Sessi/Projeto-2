$(function(){

    menuMobile();
    function menuMobile(){
    $('.menu-mobile-burger').click(function(){
        $('.menu-mobile').slideToggle(1000).css('display','flex');
    })
    }
    fecharMenu()
    function fecharMenu(){
        $('span.button-fechar').click(function(){
            $('.menu-mobile').slideToggle(1000);
        })
    }
    



    //menu scroll


    $('.nav1 a').click(function(){
        var href= $(this).attr('href');
        var offSetTop = $(href).offSet().top;

        $('html, body').animate({'scrollTop':offSetTop});

        return false;
    })


})