let back_btn = document.querySelector('.back_btn');
let next_btn = document.querySelector('.next_btn');

let index = 0;
let next = 3;
let back = -3;
back_btn.onclick = function () {
    if (index === 0) {
        index = 18;
        $('.banner .banner_img1').attr('src', `${resturant[index - 3].src}`);
        $('.banner .banner_img2').attr('src', `${resturant[index - 2].src}`);
        $('.banner .banner_img3').attr('src', `${resturant[index - 1].src}`);
        $('.banner_link1').text(`${resturant[index - 3].name}`);
        $('.banner_link2').text(`${resturant[index - 2].name}`);
        $('.banner_link3').text(`${resturant[index - 1].name}`);
        index += back;
    } else {
        index += back;
        if (index === 0) {
            index = 18;
            $('.banner .banner_img1').attr('src', `${resturant[index - 3].src}`);
            $('.banner .banner_img2').attr('src', `${resturant[index - 2].src}`);
            $('.banner .banner_img3').attr('src', `${resturant[index - 1].src}`);
            $('.banner_link1').text(`${resturant[index - 3].name}`);
            $('.banner_link2').text(`${resturant[index - 2].name}`);
            $('.banner_link3').text(`${resturant[index - 1].name}`);
        }
        $('.banner .banner_img1').attr('src', `${resturant[index - 3].src}`);
        $('.banner .banner_img2').attr('src', `${resturant[index - 2].src}`);
        $('.banner .banner_img3').attr('src', `${resturant[index - 1].src}`);
        $('.banner_link1').text(`${resturant[index - 3].name}`);
        $('.banner_link2').text(`${resturant[index - 2].name}`);
        $('.banner_link3').text(`${resturant[index - 1].name}`);
    }
    index = index;
};

next_btn.onclick = function () {
    if (index >= 17) {
        index = 0;
        $('.banner .banner_img1').attr('src', `${resturant[index].src}`);
        $('.banner .banner_img2').attr('src', `${resturant[index + 1].src}`);
        $('.banner .banner_img3').attr('src', `${resturant[index + 2].src}`);
        $('.banner_link1').text(`${resturant[index].name}`);
        $('.banner_link2').text(`${resturant[index + 1].name}`);
        $('.banner_link3').text(`${resturant[index + 2].name}`);
    } else {
        $('.banner .banner_img1').attr('src', `${resturant[index].src}`);
        $('.banner .banner_img2').attr('src', `${resturant[index + 1].src}`);
        $('.banner .banner_img3').attr('src', `${resturant[index + 2].src}`);
        $('.banner_link1').text(`${resturant[index].name}`);
        $('.banner_link2').text(`${resturant[index + 1].name}`);
        $('.banner_link3').text(`${resturant[index + 2].name}`);
    }
    index += next;
};

// https://deveapp.com/map.php -> 지역 입력 시 위도 및 경도 반환해주는 사이트

// onclick 이벤트: 강남구 서초구 성동구 요소 클릭 시 지도 중심 좌표(map.center) 강남구청 서초역 성동소방서 로 변경 및 지도 레벨 변경(map.level)
function search_Gangnam() {
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.517331925853, 127.047377408384);
    map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
}
function search_Seocho() {
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.49197968304073, 127.00759880987736);
    map.setCenter(moveLatLng); // 서초구 요소 클릭 시 지도 중심 좌표를 서초구청으로 변경 -> 서초구청 이동 시 너무 떨어져있어 서초역 위도로 변경
}
function search_Seongdong() {
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.55385421924312, 127.0393834897108);
    map.setCenter(moveLatLng); // 성동구 요소 클릭 시 지도 중심 좌표를 성동구청으로 변경 -> 여기도 식당과 떨어져있어 성동소방서 위도로 변경
}

// 필터링 : 한식 중식 양식 일식 분식 카페
// 한식 클릭 시 -> 지도 레벨 올리고 한식만 띄어주는 이벤트 발생 나머지 마커를 map.null 하면됨
// 0116 12:16 종료 : 지도 레벨 이랑 위도경도는 아직 보류
// marker 부분 markers 전역변수 배열 선언하고 marker 변수를 markers에 push 한 상태로 만듬
// 한식 리스트 클릭 시
function search_koreanFood() {
    view_Marker();
    delete_overlay();
    let category = '한식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 중식 리스트 클릭 시
function search_chineseFood() {
    view_Marker();
    delete_overlay();
    let category = '중식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 양식 리스트 클릭 시
function search_westernFood() {
    view_Marker();
    delete_overlay();
    let category = '양식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 일식 리스트 클릭 시
function search_japaneseFood() {
    view_Marker();
    delete_overlay();
    let category = '일식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 분식 리스트 클릭 시
function search_snackBar() {
    view_Marker();
    delete_overlay();
    let category = '분식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        delete_overlay();
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 카페 리스트 클릭 시
function search_cafe() {
    view_Marker();
    delete_overlay();
    let category = '카페'; // this.value
    for (let i = 0; i < positions.length; i++) {
        delete_overlay();
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}

// 0116 21:00 moveLatlng 이 변수 전역변수(배열)로 선언하는게 더 깔끔할듯 내일 가능하면 수정하기

// 지역(구) 사용자 입력폼 창 내부 버튼에 클릭 이벤트 적용
// ex) 사용자가 "강남(구)" 입력 후 입력폼 창 내부의 버튼 클릭: 지도 중심좌표가 강남구로 이동
let district_button = document.querySelector('.district_button');
district_button.onclick = function () {
    let district_input = document.querySelector('#district').value;
    if (district_input.includes('강남' || '강남구')) {
        map.setLevel(6);
        let moveLatLng = new kakao.maps.LatLng(37.517331925853, 127.047377408384);
        map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
    } else if (district_input.includes('서초' || '서초구')) {
        map.setLevel(6);
        let moveLatLng = new kakao.maps.LatLng(37.49197968304073, 127.00759880987736);
        map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
    } else if (district_input.includes('성동' || '성동구')) {
        map.setLevel(6);
        let moveLatLng = new kakao.maps.LatLng(37.55385421924312, 127.0393834897108);
        map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
    }
};

// 종류(한식,중식 등..) 사용자 입력폼 창 내부 버튼에 클릭 이벤트 적용
//  ex) 사용자가 "한식" 입력 후 버튼 클릭: 한식 마커만 지도상에 출력
let food_button = document.querySelector('.food_button'); // 버튼클래스 요소를 받아옴
food_button.onclick = function () {
    let food_input = document.querySelector('#food').value;
    let category = ['한식', '중식', '양식', '일식', '분식', '디저트'];
    if (food_input.includes(category[0])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[0] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[1])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[1] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[2])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[2] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[3])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[3] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[4])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[4] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[5])) {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (category[5] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    }
    // 한식,중식 입력외에 음식점 이름 입력 시 해당 음식점 마커만 남기고 전부
    // 나머지 음식점 마커 전부 삭제 + 해당 음식점 오버레이 출력 0117 09:45 종료
    else {
        view_Marker();
        delete_overlay();
        for (let i = 0; i < positions.length; i++) {
            if (food_input !== positions[i].name) {
                markers[i].setMap(null);
            } else {
                map.setCenter(new kakao.maps.LatLng(resturant[i].coordinate[0], resturant[i].coordinate[1])); //-> 이 부분 제대로 작동안함
                overlays[i].setMap(map);
            }
        }
    }
};
