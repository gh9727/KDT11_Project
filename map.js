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
        name: resturant[i].name,
        address: resturant[i].address,
        category: resturant[i].category,
        district: resturant[i].district,
        latlng: new kakao.maps.LatLng(resturant[i].coordinate[0], resturant[i].coordinate[1]),
        src: resturant[i].src,
        opening_hours: resturant[i].opening_hours,
        href: resturant[i].href,
    });
}
// console.log(positions[1].name); -> 카카오 api로 인해 콘솔안찍힘

// 마커 이미지의 이미지 주소입니다
// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

var imageSrc = ['한식.png', '양식.png', '중식.png', '디저트.png', '일식.png', '분식.png'];
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
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: pos.latlng, // 마커를 표시할 위치
        // title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
    });
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

    var ellipsis = document.createElement('div');
    ellipsis.className = 'ellipsis';
    ellipsis.appendChild(document.createTextNode(pos.address));
    desc.appendChild(ellipsis);

    var jibun = document.createElement('div');
    jibun.className = 'ellipsis jibun';
    // 이 부분 영업일이랑 영업 시간으로 채울거임
    jibun.appendChild(document.createTextNode(pos.opening_hours));
    desc.appendChild(jibun);

    var href_div = document.createElement('div');
    desc.appendChild(href_div);
    var href = document.createElement('a');

    // 하이퍼링크 일단 푸딘코 사이트 글로 채웠음(0115 12:30)
    // href.href = 'https://www.kakaocorp.com/main';
    href.href = `${pos.href}`;
    href.target = '_blank';
    href.className = 'link';
    href.appendChild(document.createTextNode('블로그'));
    desc.appendChild(href);
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
