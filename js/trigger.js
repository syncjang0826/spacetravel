$(function(){

    $('#trigger').click(function(e){ // e 변수에는 사용자의 행위가 저장된다.
        e.preventDefault(); // 웹 브라우저에 내장되어 있는 하이퍼 링크 기능을 제거한다.
        $(this).toggleClass('active');
        $('#main-menu').toggleClass('active');
    });

});