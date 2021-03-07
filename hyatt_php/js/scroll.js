$(document).ready(function () {
    var $doc = $('html,body');
    var $boxs = $('.page');
    var $navi_li = $('#sidenav li');
    var class_name = 'on';
    var scroll_speed = 1000;
    var len = $boxs.length;
    var posArr = [];
    var base = -400;
    var base1 = 100;

    saveVerticalPos();

    $(window).on('resize', function () {
        setTimeout(saveVerticalPos, 2000);
    });

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        activation(scroll);
        goPage(scroll);

        // if(scroll<=100){
        //     $('#sidenav').hide();
        // }else{
        //      $('#sidenav').fadeIn('fast');
        // }
    });

    $navi_li.on('click', function () {
        var i = $(this).index();
        moveScroll(i);
    });



    //세로 위치값 저장하는 함수 정의
    function saveVerticalPos() {
        posArr = [];
        for (var i = 0; i < len; i++) {
            posArr.push(Math.ceil($boxs.eq(i).offset().top));
        }
        posArr.push(Math.ceil($boxs.last().offset().top + $boxs.last().height()));
    }

    //버튼 활성화 함수 정의
    function activation(scroll) {
        for (var i = 0; i < len; i++) {
            if (scroll >= posArr[i] + base && scroll < posArr[i + 1] + base) {

                $boxs.removeClass(class_name);
                $boxs.eq(i).addClass(class_name);
            }
        }
    }

    function goPage(scroll) {
        for (var i = 0; i < len; i++) {
            if (scroll >= posArr[i] + base && scroll < posArr[i + 1] + base1) {
                $navi_li.removeClass(class_name);
                $navi_li.eq(i).addClass(class_name);
            }
        }
    }

    //세로로 자동스크롤되는 함수 정의
    function moveScroll(index) {
        $doc.stop().animate({
            'scrollTop': posArr[index]
        }, scroll_speed);
    }


});
