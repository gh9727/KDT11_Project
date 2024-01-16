//  화면에 지도 생성
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.514575, 127.0495556), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
    };
// 전역변수 : mapOption.level = 4; 이렇게 지도 레벨 변경 가능함
// mapOption.level = 3;

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// MY : 위도 경도 입력을 위한 for문
// MY : positions = [[음식점1, ...,위도1],[음식점2,..., 위도2],[음식점3,..., 위도3]]
var positions = []; // MY : po
for (let i = 0; i < resturant.length; i++) {
    positions.push({
        name: resturant[i].name, // 음식점 이름
        address: resturant[i].address, // 음식점 주소명
        category: resturant[i].category, // 한식 중식 일식 양식 분식 디저트
        district: resturant[i].district, // 강남구 서초구 성동구
        latlng: new kakao.maps.LatLng(resturant[i].coordinate[0], resturant[i].coordinate[1]), // 음식점 위치(위도,경도)
        src: resturant[i].src, // 식당 이미지 소스
        opening_hours: resturant[i].opening_hours, // 영업시간
        closed_day: resturant[i].closed_day,
        href: resturant[i].href, // 이 부분은 아직 넣지 않았음.
    });
}
// console.log(positions[1].name); -> 카카오 api로 인해 콘솔안찍힘

// 마커 이미지의 이미지 주소입니다
// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

var imageSrc = ['한식.png', '양식.png', '중식.png', '디저트.png', '일식.png', '분식.png'];
let markers = []; // marker 전역변수로 변경 0116 11:20 수정 **************** search_koreanFood() 메서드 생성을 위해 수정 **********
// marker
// 마커 생성 + 마커 한식,중식,양식.. 별 맞는 이미지 넣기
// 커스텀 오버레이 생성 + 오버레이에 들어갈 내용 createElement로 요소 생성
positions.forEach(function (pos) {
    // var imageSize = new kakao.maps.Size(24, 35);
    if (pos.category === '한식') {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[0], imageSize);
    } else if (pos.category === '양식') {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[1], imageSize);
    } else if (pos.category === '중식') {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[2], imageSize);
    } else if (pos.category === '디저트') {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
    } else if (pos.category === '일식') {
        var imageSize = new kakao.maps.Size(28, 37);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[4], imageSize);
    } else if (pos.category === '분식') {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[5], imageSize);
    }
    // var markerImage = new kakao.maps.MarkerImage(imageSrc[i], imageSize);
    // } // 이쪽 제거하면됨
    // 마커를 생성합니다.
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: pos.latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
    });
    markers.push(marker); // *********** search_koreanFood() 메서드 생성을 위해 수정 *********
    // 오버레이에 들어갈 정보를 생성합니다.
    var content = document.createElement('div');
    content.className = 'wrap';
    var info = document.createElement('div');
    info.className = 'info';
    content.appendChild(info);
    var title = document.createElement('div');
    title.className = 'title';
    title.appendChild(document.createTextNode(pos.name));
    info.appendChild(title);

    var closebtn = document.createElement('div');
    closebtn.className = 'close';
    closebtn.onclick = function () {
        overlay.setMap(null);
    };
    closebtn.title = '닫기';
    title.appendChild(closebtn);

    var body = document.createElement('div');
    body.className = 'body';
    info.appendChild(body);

    var img_div = document.createElement('div');
    img_div.className = 'img'; // 오류 수정
    body.appendChild(img_div);

    var img = document.createElement('img');
    // 이미지 배경을 각 음식점 사진으로 바꾸기 위해 pos.src
    // img.src = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png';
    img.src = pos.src;
    // 커스텀 오버레이에 들어가는 img 태그 기본값
    img.width = '73';
    img.height = '70';
    img_div.appendChild(img);

    var desc = document.createElement('div');
    desc.className = 'desc';
    body.appendChild(desc);

    // address . ellipsis -> 나중에 클래스명 address로 수정하기
    var address = document.createElement('div');
    address.className = 'ellipsis';
    address.appendChild(document.createTextNode(pos.address));
    desc.appendChild(address);

    var opening_hours = document.createElement('div');
    opening_hours.className = 'ellipsis jibun'; // 클래스명 address opening_hours 로 변경하기
    // 이 부분 영업일이랑 영업 시간으로 채울거임
    opening_hours.appendChild(document.createTextNode(pos.opening_hours));
    desc.appendChild(opening_hours);
    // 0115 1858 아직 작성중임 해야할 것 : opening_hours 요소 총 2개가 필요함 그거 레스토랑에 25개 데이터추가.. -> position에 레스토랑.오프닝아워 넣기 -> 여기 createElement 하기
    // 0115 2033 종료
    var closed_day = document.createElement('div');
    closed_day.className = 'ellipsis jibun';
    closed_day.appendChild(document.createTextNode(pos.closed_day));
    desc.appendChild(closed_day);

    var href_div = document.createElement('div');
    desc.appendChild(href_div);
    var href = document.createElement('a');

    // 하이퍼링크 일단 푸딘코 사이트 글로 채웠음(0115 12:30)
    // href.href = 'https://www.kakaocorp.com/main';
    href.href = `${pos.href}`;
    href.target = '_blank';
    href.className = 'link';
    href.appendChild(document.createTextNode('블로그'));
    href_div.appendChild(href);
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        // map: map,
        position: marker.getPosition(),
    });
    // 80%: foreach문을 for문이랑 합치면 된다.(0115 09:39 종료)
    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });
});
// forEach문 종료

// 모든 마커를 생성해주는 함수 -> 필터링 기능을 위해 제작함 0116
function view_Marker() {
    for (let index = 0; index < positions.length; index++) {
        markers[index].setMap(map);
    }
}
