$(document).ready(function () {
    var $nav = $('#nav'),
        $body = $("html,body"),
        showBanner = 0,
        bannerCount = $(".slide>li").length,
        copyLi = $(".slide>li:first").clone(),
        bannerWidth = (bannerCount + 1) * 100 + "%",
        timer = setInterval(slideTimer, 3000);

    // 이벤트 실행
    menuEvent();
    goTopEvent();
    slideEvent();
    snsEvent();
    bannerClose();
    


    //scrollTop 이벤트
    function goTopEvent() {
        $(".goTop").on("click", function () {

            var yPos = $body.offset().top;
            $body.stop().animate({
                scrollTop: yPos
            }, 1000);

        });
    }

    // 메뉴이벤트
    function menuEvent() {
        $('#nav').removeClass('on');
        $('.hamBtn').on('click', function () {
            $('#nav').addClass("on");
        });
        $('.navClose').on('click', function () {
            $('#nav').removeClass('on');
        });
    }

    //배너 닫기
    function bannerClose() {
        $(".closeBtn").on("click", function () {
            $("#topBanner").slideUp(500);
        })
    }


    //메인배너 슬라이드 이벤트
    function slideEvent() {
        $(".slide").append(copyLi);
        $(".slide").width((100 * (bannerCount + 1)) + "%");
        $(".slide>li").width((100 / (bannerCount + 1)) + "%");


        $(".slideDot>a").on("click", function (e) {
            e.preventDefault;
            e.stopPropagation;
            showBanner = $(this).index();
            moveBanner();
        });

        $(".next").on("click", function (e) {
            e.preventDefault;
            e.stopPropagation;

            if (showBanner == bannerCount) {
                showBanner = 0;
                $(".slide").css("margin-left", 0);

            }
            showBanner++;
            moveBanner();
        });

        $(".prev").on("click", function (e) {
            e.preventDefault;
            e.stopPropagation;
            if (showBanner == 0) {
                showBanner = bannerCount;
                $(".slide").css('margin-left', -bannerWidth);

            }
            showBanner--;
            moveBanner();
        });

        $("#mainVisual").on({
            "mouseover": function () {
                clearInterval(timer);
            },
            "mouseleave": function () {
                timer = setInterval(slideTimer, 3000);
            }
        });
    }

    //메인배너 margin-left 이동 이벤트
    function moveBanner() {
        $(".slide").stop().animate({
            marginLeft: -showBanner * 100 + "%"
        }, 1000);
        if (showBanner == bannerCount) {
            $(".slideDot>a").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(".slideDot>a").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }

    function slideTimer() {
        //$(".next").trigger("click");
        if (showBanner == bannerCount) {
            showBanner = 0;
            $(".slide").css("margin-left", 0);

        }
        showBanner++;
        moveBanner();

    }

    //sns 슬라이드 이벤트
    function snsEvent() {
        var show = 5;
        var l = $('.itemBox li').length;
        var w = $('.itemWrap').width() / show;

        $('.itemBox li').width(w);
        $('.itemWrap').width(w * l);

        function slider() {
            $('.itemBox li:first-child').animate({
                marginLeft: -w
            }, 'slow', function () {
                $(this).appendTo($(this).parent()).css({
                    marginLeft: 0
                });
            });
        }

        var timer = setInterval(slider, 2000);
        $('.itemWrap').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(slider, 2000);
        });

    }
});