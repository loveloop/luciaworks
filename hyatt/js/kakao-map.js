window.onload = function () {

    //카카오맵에 표시될 DOM지정
    var container = document.getElementById('map');
    
    //표시할 지역의 경도, 위도, 줌레벨 설정
    var options = {
      center: new daum.maps.LatLng(37.5222505, 127.1166664, 18.25),
      level: 3
    };
    
    //map 인스턴스 생성
    var map = new daum.maps.Map(container, options);
    
    
    //var imageSrc = 'http://loopnomics.dothome.co.kr/sutdy/jy_sass/img/map-marker.svg', 
    // 마커이미지의 주소입니다    
       // imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
       // imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다
    
    // 마커가 표시될 위치
    var //markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new daum.maps.LatLng(37.5222505, 127.1166664, 18.25);
    
    // 마커를 생성
    var marker = new daum.maps.Marker({
      position: markerPosition,
      clickable:true
      //image: markerImage // 마커이미지 설정 
    });
    
    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);
    
    
    
    var 
    // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(37.5222505, 127.1166664, 18.25); //인포윈도우 표시 위치입니다
    
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '클릭하면 지도보기로 이동합니다!', 
    // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
    
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          window.open('https://map.kakao.com/link/map/HERE,37.5222505, 127.1166664, 18.25','_blank');
    });
    
    
    
    //스카이뷰 컨트롤 표시
    //var mapTypeControl = new daum.maps.MapTypeControl();
    //map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPLEFT);
    
    //줌 컨트롤 표시
    // var zoomControl = new daum.maps.ZoomControl();
    // map.addControl(zoomControl, daum.maps.ControlPosition.BOTTOMRIGHT);
    
    //드래그기능 활성화
    setDraggable(true);
    
    function setDraggable(draggable) {
      map.setDraggable(draggable);
    }
    
    //줌기능 활성화
    setZoomable(false);
    
    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }
    
    //교통정보 표시
    //map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
    
    }
    