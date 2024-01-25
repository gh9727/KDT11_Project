var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.514575, 127.0495556), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 화면에 지도 생성

// MY : positions = [[음식점1, ...,위도1],[음식점2,..., 위도2],[음식점3,..., 위도3]]
var positions = [];
for (let i = 0; i < resturant.length; i++) {
    positions.push({
        name: resturant[i].name,
        address: resturant[i].address,
        category: resturant[i].category,
        district: resturant[i].district,
        latlng: new kakao.maps.LatLng(resturant[i].coordinate[0], resturant[i].coordinate[1]),
        src: resturant[i].src,
        opening_hours: resturant[i].opening_hours,
        closed_day: resturant[i].closed_day,
        href: resturant[i].href,
    });
}

// 마커 이미지의 이미지 주소입니다
let markers = []; // marker 변수를 담는 markers
let overlays = []; // overlay 변수를 담는 overlays

// 마커, 오버레이 생성 + 오버레이 클릭 이벤트
positions.forEach(function (pos) {
    // 카테고리 별 마커 이미지 분류
    var imageSrc = [
        'image/한식.png',
        'image/양식.png',
        'image/중식.png',
        'image/디저트.png',
        'image/일식.png',
        'image/분식.png',
    ];
    if (pos.category === '한식') {
        var imageSize = new kakao.maps.Size(45, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[0], imageSize);
    } else if (pos.category === '양식') {
        var imageSize = new kakao.maps.Size(35, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[1], imageSize);
    } else if (pos.category === '중식') {
        var imageSize = new kakao.maps.Size(60, 50);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[2], imageSize);
    } else if (pos.category === '카페') {
        var imageSize = new kakao.maps.Size(27, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
    } else if (pos.category === '일식') {
        var imageSize = new kakao.maps.Size(40, 37);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[4], imageSize);
    } else if (pos.category === '분식') {
        var imageSize = new kakao.maps.Size(40, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc[5], imageSize);
    }
    // 마커를 생성합니다.
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: pos.latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
    });

    markers.push(marker);

    // 커스텀 오버레이 요소 생성
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
    title.appendChild(closebtn);

    var body = document.createElement('div');
    body.className = 'body';
    info.appendChild(body);

    var img_div = document.createElement('div');
    img_div.className = 'img';
    body.appendChild(img_div);

    var img = document.createElement('img');
    img.src = pos.src;
    img.width = '73';
    img.height = '70';
    img_div.appendChild(img);

    var desc = document.createElement('div');
    desc.className = 'desc';
    body.appendChild(desc);

    var address = document.createElement('div');
    address.className = 'ellipsis';
    address.appendChild(document.createTextNode(pos.address));
    desc.appendChild(address);

    var opening_hours = document.createElement('div');
    opening_hours.className = 'ellipsis jibun';
    opening_hours.appendChild(document.createTextNode(pos.opening_hours));
    desc.appendChild(opening_hours);

    var closed_day = document.createElement('div');
    closed_day.className = 'ellipsis jibun';
    closed_day.appendChild(document.createTextNode(pos.closed_day));
    desc.appendChild(closed_day);

    var href_div = document.createElement('div');
    desc.appendChild(href_div);
    var href = document.createElement('a');

    href.href = `${pos.href}`;
    href.target = '_blank';
    href.className = 'link';
    href.appendChild(document.createTextNode('블로그'));
    href_div.appendChild(href);

    // 커스텀 오버레이 변수
    var overlay = new kakao.maps.CustomOverlay({
        // var content 요소를
        content: content,
        // map: map,
        position: marker.getPosition(),
    });
    overlays.push(overlay);

    // 마커 클릭 이벤트: 마커 클릭 시 해당 마커의 오버레이 생성
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });
});
// forEach문 종료

// 지도에 모든 마커를 생성
function view_Marker() {
    for (let index = 0; index < positions.length; index++) {
        markers[index].setMap(map);
    }
}

// 지도에 모든 오버레이 삭제
function delete_overlay() {
    for (let index = 0; index < positions.length; index++) {
        overlays[index].setMap(null);
    }
}

//헤더의 로그인,회원가입 & 로그아웃 바꾸는 함수
var state = window.sessionStorage.getItem('state');
console.log(state);
if (state === 'login') {
    $('.header-last').empty();
    $('.header-last').html('<a href="#" class="logout" onclick="logout()">로그아웃</a>');
    window.sessionStorage.setItem('state', 'login');
}
function logout() {
    window.sessionStorage.setItem('state', 'logout');
    $('.header-last').html(
        '<a href="join.html" class="membership">회원가입</a><a href="login.html" class="log">로그인</a>'
    );
}
