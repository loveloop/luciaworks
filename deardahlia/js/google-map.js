// google map api
function initMap() {

    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {

        //처음 중심 좌표
        center: {
            lat: 37.4512,
            lng: 127.0899
        },

        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 11
    });

    //마커 정보
    var locations = [

                //디어달리아 본점
                ['<div class="wrap"><div class="text-box"><h4>디어달리아 본점</h4><a style="margin-right:10px;" target="_blank" href="https://www.deardahlia.kr/">홈페이지</a><a target="_blank" href="https://www.google.co.kr/maps/place/(%EC%A3%BC)%EB%B0%94%EB%9E%8C%EC%9D%B8%ED%84%B0%EB%82%B4%EC%85%94%EB%82%A0/@37.5225783,127.0353495,18z/data=!4m8!1m2!2m1!1zMTLsuLU!3m4!1s0x357ca3896612d45b:0xcaafd0ea8e21ee9f!8m2!3d37.5226393!4d127.0362922?hl=ko">크게보기</a></div>', 37.522847859688525, 127.03642382930455],

                //디어달리아 롯데월드몰점
                ['<div class="wrap"><div class="text-box"><h4>디어달리아 롯데월드몰점</h4><a style="margin-right:10px;" target="_blank" href="https://www.deardahlia.kr/">홈페이지</a><a target="_blank" href="https://www.google.co.kr/maps/place/Dear+Dahlia/@37.5129713,127.0999445,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3e532771af5:0x4b8fdee77edc0078!8m2!3d37.5129671!4d127.1021332?hl=ko">크게보기</a></div>', 37.51307107894825, 127.10349049488084],


                //디어달리아 롯데몰수지점
                ['<div class="wrap"><div class="text-box"><h4>디어달리아 롯데몰수지점</h4><a style="margin-right:10px;" target="_blank" href="https://www.deardahlia.kr/">홈페이지</a><a target="_blank" href="https://www.google.co.kr/maps/place/%EB%A1%AF%EB%8D%B0%EB%AA%B0+%EC%88%98%EC%A7%80/@37.3131414,127.0790053,17z/data=!3m1!4b1!4m5!3m4!1s0x357b5bf51467143b:0xad17795de8f9d2f5!8m2!3d37.3131372!4d127.081194?hl=ko">크게보기</a></div>', 37.3131456408411, 127.08119524440008]


                ]



    //마커 이미지
    var customicon = 'images/googlemap-marker.png'

    //인포윈도우
    var infowindow = new google.maps.InfoWindow();

    //마커 생성
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({

            //마커의 위치
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),

            //마커 아이콘
            icon: customicon,

            //마커를 표시할 지도
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {

                //html로 표시될 인포 윈도우의 내용
                infowindow.setContent(locations[i][0]);

                //인포윈도우가 표시될 위치
                infowindow.open(map, marker);
            }
        })(marker, i));

        if (marker) {
            marker.addListener('click', function () {

                //중심 위치를 클릭된 마커의 위치로 변경
                map.setCenter(this.getPosition());

                //마커 클릭 시의 줌 변화
                map.setZoom(14);
            });
        }
    }
}