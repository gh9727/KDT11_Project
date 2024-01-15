let resturant = [
    {
        // 일단 모든 href : (핫) 스크렘 링크 띄어놨음(0115/ 13:19) -> 블로그글로 변경할 예정
        // opening_hours : 스크렘 영업일 및 영업시간으로 띄어놨음(0115/ 13:26) -> 각 식당 별 영업일&시간으로 변경해야함
        // 그외 특이사항 같은거 커스텀 오버레이에 적용시켜보기 휴무일만 따로 빼면 좋을듯
        name: '꼼다비뛰드',
        address: '서울 강남구 강남대로 110길 62',
        category: '양식',
        district: '강남구',
        coordinate: [37.50354, 127.0295],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/12/%EB%B9%B5%EC%A7%80%EC%88%9C%EB%A1%80.jpeg', // 이미지 파일
        opening_hours: '영업일: 목,금,토 11:00-17:00(빵 소진시 조기마감)',
        href: 'https://www.foodinko.com/%eb%b9%b5%ec%a7%80%ec%88%9c%eb%a1%80-%eb%a6%ac%ec%8a%a4%ed%8a%b8%ec%9d%98-%ec%a0%88%eb%8c%80%ec%a7%80%ec%a1%b4/',
    },
    {
        // 2
        name: '브루클린버거',
        address: '서울 강남구 봉은사로84길 10',
        category: '양식',
        district: '강남구',
        coordinate: [37.51293, 127.0556],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/12/%ED%96%84%EB%B2%84%EA%B1%B0.jpeg',
        opening_hours: '영업일: 월~일 11:00-21:30',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 17 + 확인필요(스크렘)
        name: '스크렘', // 한스크렘 수정
        address: '서울 강남구 봉은사로 4길 17',
        category: '디저트',
        district: '강남구',
        coordinate: [37.50397, 127.0265],
        // coordinate: [37.50397, 127.0265],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EA%B9%8C%EB%88%8C%EB%A0%88.jpeg',
        opening_hours: '영업일: 월~일 12:00-22:00 (일 18시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 13
        name: '런던 베이글 뮤지엄',
        address: '서울 강남구 언주로168길 33',
        category: '디저트',
        district: '강남구',
        coordinate: [37.52635, 127.0363],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9F%B0%EB%8D%98%EB%B2%A0%EC%9D%B4%EA%B8%80.jpeg',
        opening_hours: '영업일: 월~일 08:00-18:00 (공휴일 정상영업)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 12
        name: '하랑',
        address: '서울 강남구 선릉로112길 38',
        category: '일식',
        district: '강남구',
        coordinate: [37.51194, 127.0467],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%B9%98%EC%A6%88%EB%8F%88%EA%B9%8C%EC%8A%A4-%E3%85%8B.jpeg',
        opening_hours: '영업일: 월~금 11:00-21:00 (15:00-17:00 브레이크 타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 완료 + 영업시간 수정못함
        name: '센자이료큐',
        address: '서울 강남구 선릉로 161길 15-3',
        category: '일식',
        district: '강남구',
        coordinate: [37.52719, 127.039],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/12/%EB%B9%B5%EC%A7%80%EC%88%9C%EB%A1%80.jpeg',
        opening_hours: '영업일: 월~토 11:00-21:30 (토 21시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        //7
        name: '성하루',
        address: '서울 강남구 압구정로4길 13-17',
        category: '중식',
        district: '강남구',
        coordinate: [37.522526918312, 127.021432286687], // 잘못된 위*경도 수정
        // coordinate: [37.50397, 127.0265],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%96%B4%ED%96%A5%EA%B0%80%EC%A7%80-1-1.jpeg',
        opening_hours: '영업일: 월~토 11:00-21:30 (토 21시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 9
        name: '신사시장 떡볶이',
        address: '서울 강남구 압구정로 29길 72-1',
        category: '분식',
        district: '강남구',
        coordinate: [37.53246, 127.0283],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%8B%AC%EB%8B%AC-%EB%96%A2%EB%BD%80%EB%81%BC-1.jpeg',
        opening_hours: '영업일: 월~토 10:00-17:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 4
        name: '진미평양냉면',
        address: '서울 강남구 학동로 305-3',
        category: '한식',
        district: '강남구',
        coordinate: [37.51663, 127.036],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%86%8C%EA%B3%A0%EA%B8%B0%EC%A0%84%EA%B3%A8-1.jpeg',
        opening_hours: '영업일: 월~일 11:00-21:30 (일 18시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 18
        name: '도우룸', // 도어룸 수정
        address: '서울 서초구 동광로 99',
        category: '양식',
        district: '서초구',
        coordinate: [37.49406, 126.9933],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%ED%8C%8C%EC%8A%A4%ED%83%80.jpeg',
        opening_hours: '영업일: 수~일 11:30-22:00 (15:00-18:00 브레이크 타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 11
        name: '몬탁',
        address: '서울 서초구 서초대로32길 8 ',
        category: '디저트',
        district: '서초구',
        coordinate: [37.48849, 126.997],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%AA%AC%ED%83%81.jpeg   ',
        opening_hours: '영업일: 월~일 09:00-20:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 마지막
        name: '프릳츠 양재점',
        address: '서울 서초구 강남대로 37길 24-11',
        category: '디저트',
        district: '서초구',
        coordinate: [37.48847, 126.997],
        src: 'https://img.siksinhot.com/place/1490135357203090.jpg?w=307&h=300&c=Y',
        opening_hours: '영업일: 월~일 08:00-20:30',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 완료됨
        name: '일일시호일',
        address: '서울 서초구 나루터로 79',
        category: '일식',
        district: '서초구',
        coordinate: [37.51617, 127.0185],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EA%B9%80-1.jpeg',
        opening_hours: '영업일: 월~금 11:00-20:30 (14:30-17:00 브레이크 타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 6
        name: '멘야시노기',
        address: '서울 서초구 주흥길 3',
        category: '일식',
        district: '서초구',
        coordinate: [37.50401, 127.0208],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9D%BC%EB%A9%98-1.jpeg',
        opening_hours: '영업일: 월~토 11:30-20:00 (15:00-17:00 브레이크 타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 블로그글 참조
        name: '미슌',
        address: '서울 서초구 서초대로 53길 19',
        category: '중식',
        district: '서초구',
        coordinate: [37.4961, 127.0145],
        src: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MDdfOTEg/MDAxNjE3Nzg3ODY0OTMy.165hsXEMTuxkIpPej07ebIPFaO12chl9EpNFB4kdWqMg.gJpb6XJdMMLPudWfT4iEa8eNHs2uiGBse00mD84dxDkg.JPEG.tjdahdo/IMG_1347.jpg?type=w800',
        opening_hours: '영업일: 월~일 11:00-21:30',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 10
        name: '신숙',
        address: '서울 서초구 법원로 3길 21',
        category: '한식',
        district: '서초구',
        coordinate: [37.49324, 127.0083],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EA%B0%93%EA%B9%80%EC%B9%98.jpeg',
        opening_hours: '영업일: 월~토 11:30-20:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        //8 확인필요
        name: '해남원조김밥',
        address: '서울 서초구 방배중앙로 25길 15 ',
        category: '한식',
        district: '서초구',
        coordinate: [37.49403, 126.9852],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94__%EB%B3%B5%EC%82%AC%EB%B3%B8-001.jpg',
        opening_hours: '영업일: 월,수,목,금,토,일 07:00-19:30 (일 16시 마감)',
        // 재료 소진시 조기마감
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 14
        name: '피키니키 라자냐',
        address: '서울 성동구 서울숲2길 14 ',
        category: '양식',
        district: '성동구',
        coordinate: [37.5473, 127.0401],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9D%BC%EC%9E%90%EB%83%90.jpeg',
        opening_hours: '영업일: 월~금 11:30-20:50, 토~일 12:00-21:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 5
        name: '마리오네',
        address: '서울 성동구 성수이로12길 15',
        category: '양식',
        district: '성동구',
        coordinate: [37.53991, 127.057],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%82%98%ED%8F%B4%EB%A6%AC%ED%94%BC%EC%9E%90-1.jpeg',
        opening_hours: '영업일: 수,목,금,토,일 11:30-21:00 (15:00-17:00 브레이크타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 15 + 아직 영업일 시간 작성못함
        name: '마구로쇼큐도',
        address: '서울 성동구 상원2길 1',
        category: '일식',
        district: '성동구',
        coordinate: [37.54623, 127.0492],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%B0%B8%EC%B9%98%EC%82%BF.jpeg',
        opening_hours: '월~일 12:00-22:00 (일 18시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 16
        name: '멘야신',
        address: '서울 성동구 독서당로 51길 15',
        category: '일식',
        district: '성동구',
        coordinate: [37.54966, 127.0264],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9D%BC%EB%A9%98%EC%A7%91.jpeg',
        opening_hours: '영업일: 월,화,수,목,금,토 11:00-21:00 (14:00-17:00 브레이크 타임)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 블로그 참조
        name: '춘향미엔',
        address: '서울 성동구 왕십리로 21길 26',
        category: '중식',
        district: '성동구',
        coordinate: [37.56072, 127.0319],
        src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcyD5qY%2FbtrCQwt4QLC%2F9KuLsVDdlfuX8XTVlw81Tk%2Fimg.jpg',
        opening_hours: '영업일: 월,화,수,목,금 11:00-03:00(14:50-16:30 브레이크 타임) 토 11:00-02:30 일 11:00-22:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 3
        name: '명가떡볶이',
        address: '서울 성동구 장터길 25-2 ',
        category: '분식',
        district: '성동구',
        coordinate: [37.54863, 127.0188],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%B0%80%EB%96%A1%EC%8C%80%EB%96%A1.jpeg',
        opening_hours: '영업일: 월,화,수,목,금,토 10:30-23:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 블로그 참조
        name: '만나떡볶이',
        address: '서울 성동구 왕십리로24길 27',
        category: '분식',
        district: '성동구',
        coordinate: [37.56498, 127.0342],
        src: 'https://img.siksinhot.com/place/1519352255747611.jpg?w=307&h=300&c=Y',
        opening_hours: '영업일: 월,화,수,목,금 09:00-19:00 토,일 09:00-15:00',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    {
        // 블로그 참조
        name: '오프트', // 이름 수정 오포트
        address: '서울 성동구 왕십리로 10길 20',
        category: '분식',
        district: '성동구',
        coordinate: [37.54667, 127.0466],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/12/%EB%B9%B5%EC%A7%80%EC%88%9C%EB%A1%80.jpeg',
        opening_hours: '월,화,수,목,금,토,일 11:30-22:00 (일 18시 마감)',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
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
