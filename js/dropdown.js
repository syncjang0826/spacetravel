$(function(){

    $('#main-menu > li').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
        // $(this) : 이벤트 대상들 중에 이벤트가 발생한 요소 하나를 선택한다.
        // find('선택자') : 하위 요소 중 선택자로 요소를 선택한다.
        // stop() : 모든 효과를 제거한다.
        // slideDown()는 요소를 아래로 내리면서 보여준다. slideUp()는 요소를 위로 올리면서 숨긴다.
    });

    $('#main-menu > li').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
    });
    
});