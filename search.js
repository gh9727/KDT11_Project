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
// 한식 클릭 시 -> 지도 레벨 올리고 한식만 띄어주는 이벤트 발생
function search_koreanFood() {
    map.setLevel(4);
    marker.map = null;
}
function search_chineseFood() {
    map.setLevel(4);
}
function search_westernFood() {
    map.setLevel(4);
}
function search_japaneseFood() {
    map.setLevel(4);
}
function search_snackBar() {
    map.setLevel(4);
}
function search_cafe() {
    map.setLevel(4);
}
