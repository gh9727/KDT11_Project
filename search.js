// https://deveapp.com/map.php -> 지역 입력 시 위도 및 경도 반환해주는 사이트
// <!-- 강남구 서초구 button 요소 클릭 시 구에 맞게 지도 중심좌표 이동 : 이 부분 onclick 이벤트 설정이 전부 안되서 질문 드림(0115 12:25) -->
//                 <!-- click()이 문제였음 clk()로 변경해서 해결함 -->
// 리더님 도움으로 에러(onclick 속성값을 click()으로 해서 생긴 오류였음)잡음(0115/12:49) + 이건 예시고 search.js 에 본 파일 옮겨야함(0115/ 13:27)
// 0115 1730 종료

// onclick 이벤트: 강남구 서초구 성동구 요소 클릭 시 지도 중심 좌표(map.center) 강남구청 서초역 성동소방서 로 변경 및 지도 레벨 변경(map.level)
function search_Gangnam() {
    // let level = map.getLevel();
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.517331925853, 127.047377408384);
    map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
    // map.setCenter(37.517331925853, 127.047377408384);
    // mapOption.center = new kakao.maps.LatLng(37.517331925853, 127.047377408384);
    // mapOption.level = 4;
}
function search_Seocho() {
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.49197968304073, 127.00759880987736);
    map.setCenter(moveLatLng); // 서초구 요소 클릭 시 지도 중심 좌표를 서초구청으로 변경 -> 서초구청 이동 시 너무 떨어져있어 서초역 위도로 변경
    // mapOption.center = new kakao.maps.LatLng(37.483588810333, 127.032734543897);
}
function search_Seongdong() {
    map.setLevel(6);
    let moveLatLng = new kakao.maps.LatLng(37.55385421924312, 127.0393834897108);
    map.setCenter(moveLatLng); // 성동구 요소 클릭 시 지도 중심 좌표를 성동구청으로 변경 -> 여기도 식당과 떨어져있어 성동소방서 위도로 변경
    // mapOption.center = new kakao.maps.LatLng(37.563427205337, 127.036930141185);
}

// 필터링 : 한식 중식 양식 일식 분식 카페
// 한식 클릭 시 -> 지도 레벨 올리고 한식만 띄어주는 이벤트 발생 나머지 마커를 map.null 하면됨
// 0116 12:16 종료 : 지도 레벨 이랑 위도경도는 아직 보류
// marker 부분 markers 전역변수 배열 선언하고 marker 변수를 markers에 push 한 상태로 만듬
// 한식 리스트 클릭 시
function search_koreanFood() {
    view_Marker();
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
    let category = '분식'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}
// 카페 리스트 클릭 시
function search_cafe() {
    view_Marker();
    let category = '디저트'; // this.value
    for (let i = 0; i < positions.length; i++) {
        if (category !== positions[i].category) {
            markers[i].setMap(null);
        }
    }
}

// 필터링 작업 0116 12:11 종료

// 사용자 입력창 이벤트 0116 이 부분 아직 못함 -> 0116 21:23 마무리
// let district_input = document.querySelector('#district').value;
// let food_input = document.querySelector('#food').value;
// console.log(district_input);
// console.log(food_input);
// if (district_input.includes('강남' || '강남구')) {
//     map.setLevel(6);
//     let moveLatLng = new kakao.maps.LatLng(37.517331925853, 127.047377408384);
//     map.setCenter(moveLatLng); // 강남구 요소 클릭 시 지도 중심 좌표를 강남구청으로 변경
// }

// 0116 21:00 moveLatlng 이 변수 전역변수(배열)로 선언하는게 더 깔끔할듯 내일 가능하면 수정하기
let district_button = document.querySelector('.district_button');
// 지역(구) 사용자 입력폼 창 내부 버튼에 클릭 이벤트 적용
// ex) 사용자가 "강남(구)" 입력 후 입력폼 창 내부의 버튼 클릭: 지도 중심좌표가 강남구로 이동
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

let food_button = document.querySelector('.food_button'); // 버튼클래스 요소를 받아옴
// 종류(한식,중식 등..) 사용자 입력폼 창 내부 버튼에 클릭 이벤트 적용
//  ex) 사용자가 "한식" 입력 후 버튼 클릭: 한식 마커만 지도상에 출력
food_button.onclick = function () {
    let food_input = document.querySelector('#food').value;
    let category = ['한식', '중식', '양식', '일식', '분식', '디저트'];
    if (food_input.includes(category[0])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[0] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[1])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[1] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[2])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[2] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[3])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[3] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[4])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[4] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    } else if (food_input.includes(category[5])) {
        view_Marker();
        for (let i = 0; i < positions.length; i++) {
            if (category[5] !== positions[i].category) {
                markers[i].setMap(null);
            }
        }
    }
};
// 0116 21:17 사용자 입력폼 이벤트 추가 종료
