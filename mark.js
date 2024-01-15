//  화면에 지도 생성
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.514575, 127.0495556), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title(일단 제외했음) 객체 배열입니다
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
    });
}
// console.log(positions[1].name); -> 카카오 api로 인해 콘솔안찍힘

// 마커 이미지의 이미지 주소입니다
// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

// for (var i = 0; i < positions.length; i++) {
// 마커 이미지의 이미지 크기 입니다(원본 사이즈 24, 35)
// var imageSize = new kakao.maps.Size(24, 35);

// // 마커 이미지를 생성합니다
// // MY : if문넣고 양식, 중식, 한식, 디저트 중 각 일치하는 데이터에 해당하는 이미지 넣기
// if (positions[i].category === '한식') {
//     var markerImage = new kakao.maps.MarkerImage(imageSrc[0], imageSize);
// } else if (positions[i].category === '양식') {
//     var markerImage = new kakao.maps.MarkerImage(imageSrc[1], imageSize);
// } else if (positions[i].category === '중식') {
//     var markerImage = new kakao.maps.MarkerImage(imageSrc[2], imageSize);
// } else if (positions[i].category === '디저트') {
//     var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
// }
//   else if (positions[i].category === '일식') {
//     var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
// }
// // var markerImage = new kakao.maps.MarkerImage(imageSrc[i], imageSize);
// // } // 이쪽 제거하면됨
// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     map: map, // 마커를 표시할 지도
//     position: positions[i].latlng, // 마커를 표시할 위치
//     // title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//     image: markerImage, // 마커 이미지
// });
// }
// var marker = new kakao.maps.Marker({
//     map: map, // 마커를 표시할 지도
//     position: positions[i].latlng, // 마커를 표시할 위치
//     // title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//     image: markerImage, // 마커 이미지
// });
var imageSrc = ['한식.png', '양식.png', '중식.png', '디저트.png' /* 일식.png */];
positions.forEach(function (pos) {
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    // MY : if문넣고 양식, 중식, 한식, 디저트 중 각 일치하는 데이터에 해당하는 이미지 넣기
    // if (positions[i].category === '한식') {
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc[0], imageSize);
    // } else if (positions[i].category === '양식') {
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc[1], imageSize);
    // } else if (positions[i].category === '중식') {
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc[2], imageSize);
    // } else if (positions[i].category === '디저트') {
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
    // }
    if (pos.category === '한식') {
        var markerImage = new kakao.maps.MarkerImage(imageSrc[0], imageSize);
    } else if (pos.category === '양식') {
        var markerImage = new kakao.maps.MarkerImage(imageSrc[1], imageSize);
    } else if (pos.category === '중식') {
        var markerImage = new kakao.maps.MarkerImage(imageSrc[2], imageSize);
    } else if (pos.category === '디저트') {
        var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
    }
    // else if (pos.category === '일식') {
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc[3], imageSize);
    // }
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
    img.src = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png';
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
    jibun.appendChild(document.createTextNode(pos.district));
    desc.appendChild(jibun);

    var href_div = document.createElement('div');
    desc.appendChild(href_div);
    var href = document.createElement('a');

    href.href = 'https://www.kakaocorp.com/main';
    href.target = '_blank';
    href.className = 'link';
    href.appendChild(document.createTextNode('홈페이지'));
    desc.appendChild(href);
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        // map: map,
        position: marker.getPosition(),
    });
    // 80% 완성 foreach문을 for문이랑 합치면 된다.
    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });
});

// // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 0115 일단 여기서는 안쓰임 위에 foreach문에서 닫기 메서드 작성했음
// function closeOverlay() {
//     overlay.setMap(null);
// }
// var content = `<div class="wrap">
//                     <div class="info">
//                         <div class="title">
//                             ${positions[i].name}
//                             <div class="close" onclick="closeOverlay()" title="닫기"></div>
//                         </div>

//                         <div class="body">
//                             <div class="img">
//                                 <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">
//                             </div>
//                             <div class="desc">
//                                 <div class="ellipsis">${positions[i].address}</div>
//                                 <div class="jibun ellipsis">${positions[i].district}</div>
//                                 <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;
// 3. 커스텀 오버레이를 생성합니다 -> 마커 생성할 때 같이 생성
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다
// var overlay = new kakao.maps.CustomOverlay({
//     content: content,
//     // map: map,
//     position: marker.getPosition(),
// });
// // 아직 미완성
// // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
// kakao.maps.event.addListener(marker, 'click', function () {
//     overlay.setMap(map);
// });
// // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
// function closeOverlay() {
//     overlay.setMap(null);
// }
// }
