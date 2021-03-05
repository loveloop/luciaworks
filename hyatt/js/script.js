$(document).ready(function () {
    "use strict";

    var $document = $(document),
        $body = $("html, body"),
        $loading = $('#loading');

    //header 변수
    var $gnb = $('#nav'),
        $gnb_li = $gnb.children('li'),
        $gnb_li_a = $gnb_li.children('a'),
        $gnb_li_ul = $gnb_li.children('ul'),
        ht_arr = [],
        ht_max = 0,
        speed = 500;

    init();

    var video = document.querySelector('video');
    video.muted = true; 

    //초기 실행 이벤트
    function init() {
        loading();
        skipEvent();
        goTopEvent();
        bannerClose();
        navEvent();
    }

    //scroll event
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 112) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });

    //로딩화면 기능
    function loading() {
        $loading.fadeIn();
        setTimeout(function () {
            $loading.fadeOut(1000);
        }, 3500);
    }

    //스킵기능
    function skipEvent() {
        $('#skipNavi>li>a').on('focusin', function () {
            $(this).addClass('on');
        });
        $('#skipNavi>li>a').on('focusout', function () {
            $(this).removeClass('on');
        });
    }

    //goTop 이벤트
    function goTopEvent() {
        $(".goTop").on("click", function () {
            var yPos = $body.offset().top;
            $body.stop().animate({
                scrollTop: yPos
            }, 1000);
        });
    }

    //배너 닫기
    function bannerClose() {
        $("#topBanner .close").on("click", function () {
            $("#topBanner").slideUp(500);
        });
    }

    // header - nav
    function navEvent() {
        getSubMaxHeight();

        $gnb.on('mouseenter', openSub);
        $gnb.on('mouseleave', closeSub);

        $gnb_li_a.on('focusin', openSub);
        $gnb_li.last().find('a').last().on('focusout', closeSub);

        $gnb_li.on('mouseenter', function () {
            $(this).children('a').addClass('on');
        });
        $gnb_li.on('mouseleave', function () {
            $(this).children('a').removeClass('on');
        });
    }

    function getSubMaxHeight() {
        $gnb_li.each(function (i) {
            var liHeight = $(this).children('ul').height();
            ht_arr.push(liHeight);
            ht_max = Math.max(ht_max, ht_arr[i]) + 10;
        });
    }

    function openSub() {
        $('.bgGnb').css({
            height: ht_max
        });

        $gnb_li_ul.stop().slideDown(speed);
        $('.bgGnb').stop().slideDown(speed);
    }

    function closeSub() {
        $gnb_li_ul.stop().slideUp(speed - 400);
        $('.bgGnb').stop().slideUp(speed - 2);
    }

    //모바일버전 메뉴, 햄버거버튼
    //햄버거버튼 : 클릭 시 풀스크린 메뉴 나옴
    var $hamburger = $(".hamburger"),
        $hClass = "active";

    $hamburger.on('click', function () {
        var $mgnb = $("#mgnb");
        $(this).toggleClass("is-active");
        if (!$mgnb.hasClass($hClass)) {
            $mgnb.fadeIn().toggleClass($hClass).parent('body').find($(".goTop")).hide();
            $mgnb.on('scroll touchmove mousewheel', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $mgnb.fadeOut().removeClass($hClass).parent('body').find($(".goTop")).show();

            $mgnb.off('scroll touchmove mousewheel');
        }
    });

    // #visual
    $('#infoWrap>li .open').on('click', function (e) {
        e.preventDefault();

        var i = $(this).parent('.front').parent('li').index();

        $('#infoWrap>li').eq(i).addClass('on');
        $('#infoWrap>li').not('.on').addClass('off');
        setTimeout(function () {
            $('#infoWrap>li.on').addClass('on2');
        }, 1000);
    });

    $('#infoWrap>li .close').on('click', function (e) {
        e.preventDefault();
        $('#infoWrap>li').removeClass('on2');
        setTimeout(function () {
            $('#infoWrap>li.on').removeClass('on');
        }, 1000);
        setTimeout(function () {
            $('#infoWrap>li.off').removeClass('off');
        }, 2000);
    });

    //호텔소개 slider
    var aNum = 0,
        $vBannerWrap = $(".videoBanner"),
        $vBannerLi = $(".videoBanner>li"),
        count = $(".videoBanner>li").length,
        $copyLi = $(".videoBanner>li:lt(2)").clone(),
        $circleBar = $(".circle>li"),
        $vLeft = $(".leftBtn"),
        $vRight = $(".rightBtn"),
        $vClass = "active";

    $vBannerWrap.append($copyLi);

    $vRight.on("click", function (e) {
        e.preventDefault();
        moveRight();
    });

    $vLeft.on("click", function (e) {
        e.preventDefault();
        moveLeft();
    });

    $circleBar.on("click", function (e) {
        e.preventDefault();
        aNum = $(this).index();
        moveBanner();
    });

    function circleBar(value) {
        $circleBar.eq(value).addClass($vClass).siblings().removeClass($vClass);
    }

    function bannerLi(value) {
        $vBannerLi.eq(value).addClass($vClass).siblings().removeClass($vClass);
    }

    function moveBanner() {
        $vBannerWrap.stop().animate({
            "margin-left": -aNum * 100 + "%"
        }, 500);
        if (aNum === count) {
            circleBar(0);
        }
        circleBar(aNum);
        bannerLi(aNum);
    }

    function moveRight() {
        if (aNum === count) {
            aNum = 0;
            $vBannerWrap.css("margin-left", 0);
        }
        aNum++;
        moveBanner();
    }

    function moveLeft() {
        if (aNum == 0) {
            $vBannerWrap.css("margin-left", -100 * count + "%");
            aNum = count;
        }
        aNum--;
        moveBanner();
    }

    //탭기능
    var $tabInner = ".inner",
        $tabS1 = ".s1",
        $tabLi = $('#tab>dl>dt>a'),
        $tabClass = "on";

        $tabLi.css('cursor','pointer !important');
        $tabLi.on('click focusin touchstart', function (e) {
        e.preventDefault();
        var sNum = $(this).parent('dt').closest("dl").index();
        $('#tab>dl>dt, #tab>dl>dd').removeClass($tabClass);
        $(this).parent('dt').addClass($tabClass).next('dd').addClass($tabClass);

        switch (sNum) {
            case 0:
                $(this).parents($tabInner).find($tabS1).text('Rooms & Suites');
                break;
            case 1:
                $(this).parents($tabInner).find($tabS1).text('Dining & Bar');
                break;
            case 2:
                $(this).parents($tabInner).find($tabS1).text('Spaces & Wedding');
                break;
            case 3:
                $(this).parents($tabInner).find($tabS1).text('Special Offers');
                break;
        }

    });

    //gallery masonry event
    //기본 UI적용
    var $grid = $('#gallery .item_wrap').isotope({ //플러그인을 적용할 부모태그 선택자
        itemSelector: '.item', //플러그인을 적용할 박스의 공통 클래스명
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.item' //적용할 박스의 제일 작은 넓이값
        },
        masonryHorizontal: {
            rowHeight: 0 //적용할 박스의 제일 작은 높이값
        },
        transitionDuration: '0.5s', //박스가 움직일때의 속도값
        percentPosition: true
    });


    //필터링 기능
    $('.filter a').on('click', function (e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });

        $('.filter li').removeClass('on');
        $(this).parent('li').addClass('on');
    });

    //brand flow banner
    var $banner = $(".brandLi");
    var brandWidth = 0;
    var $bannerWidth = $banner.children().outerWidth();
    var timer = setInterval(function () {
        rollingStart();
    }, 500);

    brandBnrWidth();

    function brandBnrWidth() {
        $(".brandLi > li").each(function () {
            var brandLiWidth = $(".brandLi > li").width();
            brandWidth += brandLiWidth + 40;
        });

        $(".brandLi").width(brandWidth);
    }

    function rollingStart() {
        $banner.animate({
            left: -$bannerWidth + "px"
        }, 3000, function () {

            $(this).append($(this).find("li:first").clone());
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }

    // 예약 객실수, 성인, 어린이 카운터
    // $('.countVal').prop('disabled', true);
    var $datepickerDiv = $(".ui-datepicker-div"),
        $rSearch = $(".search"),
        $reservBox = $(".reservBox");

    $document.on('click', '.plusBtn', function () {
        var countThis = $(this).closest(".countWrap").find(".countVal");
        $(countThis).val(parseInt($(countThis).val()) + 1);
    });
    $document.on('click', '.minusBtn', function () {
        var countThis = $(this).closest(".countWrap").find(".countVal");
        $(countThis).val(parseInt($(countThis).val()) - 1);
        if ($(countThis).val() <= 0) {
            $(countThis).val(0);
        }
    });
    $document.on('click', '#resetButton', function () {
        $(".countVal").val(0);
    });

    //예약하기 박스
    $datepickerDiv.hide();
    $reservBox.find(".close").on("click", function () {
        $rSearch.hide();
        $reservBox.slideUp(500).fadeOut("fast");
        $datepickerDiv.hide();
    });

    $(".quickBtn>a, .booknow>a, .reservBtn").on("click", function () {
        $reservBox.slideDown(500);
        $rSearch.show();
        $reservBox.on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });

});
