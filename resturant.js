let resturant = [
    {
        name: '꼼다비뛰드',
        address: '서울 강남구 강남대로 110길 62',
        category: '양식',
        district: '강남구',
        coordinate: [37.50354, 127.0295],
    },
    {
        name: '브루클린버거',
        address: '서울 강남구 봉은사로84길 10',
        category: '양식',
        district: '강남구',
        coordinate: [37.51293, 127.0556],
    },
    {
        name: '한스크렘',
        address: '서울 강남구 봉은사로 4길 17',
        category: '디저트',
        district: '강남구',
        coordinate: [37.50397, 127.0265],
    },
    {
        name: '런던 베이글 뮤지엄',
        address: '서울 강남구 언주로168길 33',
        category: '디저트',
        district: '강남구',
        coordinate: [37.52635, 127.0363],
    },
    {
        name: '하랑',
        address: '서울 강남구 선릉로112길 38',
        category: '일식',
        district: '강남구',
        coordinate: [37.51194, 127.0467],
    },
    {
        name: '센자이료큐',
        address: '서울 강남구 선릉로 161길 15-3',
        category: '일식',
        district: '강남구',
        coordinate: [37.52719, 127.039],
    },
    {
        name: '성하루',
        address: '서울 강남구 압구정로4길 13-17',
        category: '중식',
        district: '강남구',
        coordinate: [37.50397, 127.0265],
    },
    {
        name: '신사시장 떡볶이',
        address: '서울 강남구 압구정로 29길 72-1',
        category: '분식',
        district: '강남구',
        coordinate: [37.53246, 127.0283],
    },
    {
        name: '진미평양냉면',
        address: '서울 강남구 학동로 305-3',
        category: '한식',
        district: '강남구',
        coordinate: [37.51663, 127.036],
    },
    {
        name: '도어룸',
        address: '서울 서초구 동광로 99',
        category: '양식',
        district: '서초구',
        coordinate: [37.49406, 126.9933],
    },
    {
        name: '몬탁',
        address: '서울 서초구 서초대로32길 8 ',
        category: '디저트',
        district: '서초구',
        coordinate: [37.48849, 126.997],
    },
    {
        name: '프릳츠 양재점',
        address: '서울 서초구 강남대로 37길 24-11',
        category: '디저트',
        district: '서초구',
        coordinate: [37.48847, 126.997],
    },
    {
        name: '일일시호일',
        address: '서울 서초구 나루터로 79',
        category: '일식',
        district: '서초구',
        coordinate: [37.51617, 127.0185],
    },
    {
        name: '멘야시노기',
        address: '서울 서초구 주흥길 3',
        category: '일식',
        district: '서초구',
        coordinate: [37.50401, 127.0208],
    },
    {
        name: '미슌',
        address: '서울 서초구 서초대로 53길 19',
        category: '중식',
        district: '서초구',
        coordinate: [37.4961, 127.0145],
    },
    {
        name: '신숙',
        address: '서울 서초구 법원로 3길 21',
        category: '한식',
        district: '서초구',
        coordinate: [37.49324, 127.0083],
    },
    {
        name: '해남원조김밥',
        address: '서울 서초구 방배중앙로 25길 15 ',
        category: '한식',
        district: '서초구',
        coordinate: [37.49403, 126.9852],
    },
    {
        name: '피키니키 라자냐',
        address: '서울 성동구 서울숲2길 14 ',
        category: '양식',
        district: '성동구',
        coordinate: [37.5473, 127.0401],
    },
    {
        name: '마리오네',
        address: '서울 성동구 성수이로12길 15',
        category: '양식',
        district: '성동구',
        coordinate: [37.53991, 127.057],
    },
    {
        name: '마구로쇼큐도',
        address: '서울 성동구 상원2길 1',
        category: '일식',
        district: '성동구',
        coordinate: [37.54623, 127.0492],
    },
    {
        name: '멘야신',
        address: '서울 성동구 독서당로 51길 15',
        category: '일식',
        district: '성동구',
        coordinate: [37.54966, 127.0264],
    },
    {
        name: '춘향미엔',
        address: '서울 성동구 왕십리로 21길 26',
        category: '중식',
        district: '성동구',
        coordinate: [37.56072, 127.0319],
    },
    {
        name: '명가떡볶이',
        address: '서울 성동구 장터길 25-2 ',
        category: '분식',
        district: '성동구',
        coordinate: [37.54863, 127.0188],
    },
    {
        name: '만나떡볶이',
        address: '서울 성동구 왕십리로24길 27',
        category: '분삭',
        district: '성동구',
        coordinate: [37.56498, 127.0342],
    },
    {
        name: '오포트',
        address: '서울 성동구 왕십리로 10길 20',
        category: '분식',
        district: '성동구',
        coordinate: [37.54667, 127.0466],
    },
];
{
    /* <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ec794db2c9a4e5f04f8802330b1070b8"></script>;

//  화면에 지도 생성
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.514575, 127.0495556), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title(일단 제외했음) 객체 배열입니다
// 위도 경도 입력을 위한 for문
// positions = [[음식점1, 위도1],[음식점2, 위도2],[음식점3, 위도3]]
// var positions = [['', 0]]; // 위도 담을 positions 배열
var positions = [];
for (let i = 0; i < resturant.length; i++) {
    positions.push({
        latlng: new kakao.maps.LatLng(resturant[i].coordinate[0], resturant[i].coordinate[1]),
    });
}

// 마커 이미지의 이미지 주소입니다
// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
var imageSrc = ['디저트.png', '양식.png', '한식.png', '중식png'];

for (var i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    // if문넣고 양식, 중식, 한식, 디저트 중 맞는 각 일치하는 데이터에 해당값 넣기
    var markerImage = new kakao.maps.MarkerImage(imageSrc[i], imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        // title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
    });
}

// 마커에 click 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function () {
    // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
    // 마커의 이미지를 클릭 이미지로 변경합니다
    // if (!selectedMarker || selectedMarker !== marker) {
    //     marker.setImage(clickImage);
    // }

    // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
    selectedMarker = marker;
    // 커스텀 오버레이 시작
    var content = '<div class="overlay_info">';
    content += '    <a href="https://place.map.kakao.com/17600274" target="_blank"><strong>서울 강남</strong></a>';
    content += '    <div class="desc">';
    content += '        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" alt="">';
    content += '        <span class="address">서울특별시 강남구 ... 예시 33-4</span>';
    content += '    </div>';
    content += '</div>';

    // 커스텀 오버레이가 표시될 위치입니다

    // 아래 코드는 한 마커에 밖에 넣을 수 없음
    var position = new kakao.maps.LatLng(resturant[0].coordinate[0], resturant[0].coordinate[1]);

    // 각 마커에 커스텀 오버레이를 생성합니다
    // for (let j = 0; j < resturant.length; j++) {
    //     var mapCustomOverlay = new kakao.maps.CustomOverlay({
    //         position: positions[i].lating,
    //         content: content,
    //         xAnchor: 0, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
    //         yAnchor: 0, // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
    //     });
    // }
    var mapCustomOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
        yAnchor: 0, // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
    });

    // 커스텀 오버레이를 지도에 표시합니다
    mapCustomOverlay.setMap(map);
    // 커스텀 오버레이 끝
}); */
}
