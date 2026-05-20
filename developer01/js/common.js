$(function(){
    // dropdown menu
    var width = $(window).width();

    if (width >= 1050) {
        $('#main-menu > li').hover(
            function(e){
                e.preventDefault();
                $(this).find('.sub-menu').stop().slideDown();
            },
            function(e){
                e.preventDefault();
                $(this).find('.sub-menu').stop().slideUp();
            }
        );
    } else {
        $('#main-menu > li > a').click(function(e){
            e.preventDefault();
            var subMenu = $(this).siblings('.sub-menu');

            if (subMenu.length > 0) {
                subMenu.stop().slideToggle();
                // 열려 있으면 닫고, 닫혀 있으면 열기
                $('#main-menu .sub-menu').not(subMenu).slideUp();
                // 다른 열려있는 서브메뉴는 닫는다.
            }
        });
    }
    

    // trigger
    $('#trigger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('#main-menu').toggleClass('active');
    });


    // scroll
    $(window).on('scroll', function(){
        var wid = $(this).width();
        var distance = $(this).scrollTop();

        if (wid >= 600 && wid < 1049) {
            if (distance >= 200) {
                $('header').addClass('active');
            } else {
                $('header').removeClass('active');
            }
        } else if (wid < 600) {
            if (distance >= 300) {
                $('header').addClass('active');
            } else {
                $('header').removeClass('active');
            }
        }
    });
});