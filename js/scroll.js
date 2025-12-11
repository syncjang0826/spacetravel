$(function(){
    $(window).scroll(function(){
        var value = $(window).scrollTop();
        // scrollTop()는 웹 브라우저에서 아래로 스크롤된 거리를 얻는다.
        if (value >= 150) {
            $('header').addClass('dark');
            // header 요소에 클래스명 dark를 추가한다.
        } else {
            $('header').removeClass('dark');
            // header 요소에 클래스명 dark를 제거한다.
        }
    });
});
