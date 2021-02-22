// google map api
function initMap() {

    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {

        //처음 중심 좌표
        center: {
            lat: 37.53958427982672,
            lng: 126.9973283896993
        },
       
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 15
    });

    //마커 정보
    var locations = [

                //그랜드 하얏트 서울
                ['<div class="wrap"><div class="text-box"><h4>그랜드 하얏트 서울</h4><a target="_blank" href="https://www.google.com/maps/place/Grand+Hyatt+Seoul/@37.5401317,126.9956442,16.5z/data=!4m8!3m7!1s0x0:0x29245075a97761ae!5m2!4m1!1i2!8m2!3d37.5393346!4d126.9972683">크게보기</a></div>',37.53965646614583, 126.99710079673584]

    ]



    //마커 이미지
    var customicon = 'http://imagineloop.com/portfolio/deardahlia/images/googlemap-marker.png';

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