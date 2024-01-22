let resturant = [
    {
        // 일단 모든 href : (핫) 스크렘 링크 띄어놨음(0115/ 13:19) -> 블로그글로 변경할 예정
        // opening_hours : 스크렘 영업일 및 영업시간으로 띄어놨음(0115/ 13:26) -> 각 식당 별 영업일&시간으로 변경해야함
        // 그외 특이사항 같은거 커스텀 오버레이에 적용시켜보기 휴무일만 따로 빼면 좋을듯

        //아침
        name: '스크렘',
        address: '서울 강남구 봉은사로4길 17 1층',
        category: '카페',
        district: '강남구',
        coordinate: [37.50354, 127.0295],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EA%B9%8C%EB%88%8C%EB%A0%88.jpeg', // 이미지 파일
        opening_hours: '월~일 12:00-22:00',
        closed_day: '없음',
        href: 'blog_3.html',
    },
    {
        // 2
        name: '프릳츠 양재점',
        address: '서울 서초구 강남대로 37길 42-11',
        category: '카페',
        district: '서초구',
        coordinate: [37.51293, 127.0556],
        src: 'https://pup-review-phinf.pstatic.net/MjAyMzEyMjRfMjIx/MDAxNzAzMzg1MjI3NjE0.m3XZvXHMe57qGuzOd_QYEG71i08g7zX1NJYL0E-nReAg.VwMozSwVJheHuWyBrByB13h8nwsgwbGvqaUEO6MYdQ0g.JPEG/8589043A-9660-4A79-AEF4-C2CA8C0D5B31.jpeg',
        opening_hours: '월~금 08:00-20:30 토~일 10:00~20:30',
        closed_day: '없음',
        href: 'blog_12.html',
    },
    {
        //3
        name: '런던 베이글 뮤지엄', // 한스크렘 수정
        address: '서울 강남구 언주로168길 33',
        category: '카페',
        district: '강남구',
        coordinate: [37.50397, 127.0265],
        // coordinate: [37.50397, 127.0265],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9F%B0%EB%8D%98%EB%B2%A0%EC%9D%B4%EA%B8%80-1024x1024.jpeg',
        opening_hours: '월~일 08:00-18:00',
        closed_day: '없음',
        href: 'blog_4.html',
    },

    //점심
    {
        // 4
        name: '도우룸',
        address: '서울 서초구 동광로 99 2층',
        category: '양식',
        district: '서초구',
        coordinate: [37.52635, 127.0363],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%ED%8C%8C%EC%8A%A4%ED%83%80.jpeg',
        opening_hours: '월, 목~일 11:30-22:00',
        closed_day: '화, 수',
        href: 'blog_10.html',
    },
    {
        // 5
        name: '하랑',
        address: '서울 강남구 선릉로112길 38',
        category: '일식',
        district: '강남구',
        coordinate: [37.51194, 127.0467],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%B9%98%EC%A6%88%EB%8F%88%EA%B9%8C%EC%8A%A4-%E3%85%8B.jpeg',
        opening_hours: '월~금 11:00-21:00',
        closed_day: '토요일,일요일',
        href: 'blog_5.html',
    },
    {
        // 6
        name: '성하루',
        address: '서울 강남구 압구정로4길 13-17 2층',
        category: '중식',
        district: '강남구',
        coordinate: [37.52719, 127.039],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%96%B4%ED%96%A5%EA%B0%80%EC%A7%80--1024x1024.jpeg',
        opening_hours: '화~토 11:00-22:00 (브레이크 타임 15:00-17:00)',
        closed_day: '일요일 , 월요일',
        href: 'blog_7.html',
    },
    //저녁
    {
        //7
        name: '마그로쇼큐도',
        address: '서울 성동구 상원2길 1',
        category: '일식',
        district: '성동구',
        coordinate: [37.522526918312, 127.021432286687], // 잘못된 위*경도 수정
        // coordinate: [37.50397, 127.0265],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%B0%B8%EC%B9%98%EC%82%BF.jpeg',
        opening_hours: '화~토 11:00-20:00 ',
        closed_day: '일요일,월요일',
        href: 'blog_20.html',
    },
    {
        // 8
        name: '진미평양냉면',
        address: '서울 강남구 학동로 305-3',
        category: '한식',
        district: '강남구',
        coordinate: [37.53246, 127.0283],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%86%8C%EA%B3%A0%EA%B8%B0%EC%A0%84%EA%B3%A8-1024x1024.jpeg',
        opening_hours: '월~토 11:00-21:30',
        closed_day: '없음',
        href: 'blog_9.html',
    },
    {
        // 9
        name: '춘향미엔',
        address: '서울 성동구 왕십리로 21길 26',
        category: '중식',
        district: '성동구',
        coordinate: [37.51663, 127.036],
        src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjdfMTgz%2FMDAxNzAxMDkzNjAwNDEw.ncQngZPJnYAgZeJx4BVqL8YHURb9eynvhMYce8W581Qg.PT_LMIQ1Mn7eyOe6tCa-gvXn8LsIoWr19AzUBch36b8g.JPEG.jhlikems%2FKakaoTalk_20231127_204653962_08.jpg',
        opening_hours: '월~일 11:00-22:00',
        closed_day: '없음',
        href: 'blog_22.html',
    },

    //간식
    {
        // 10
        name: '오프트',
        address: '서울 성동구 왕십리로 10길 20',
        category: '분식',
        district: '성동구',
        coordinate: [37.49406, 126.9933],
        src: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMTJfOCAg%2FMDAxNzA1MDI0MTc0NzAx.i41UoR6Kl5XJsmXYD_0AW8l5KAD-ph0NxIfVA8cRZLUg.t4ze_yDzInmIDuetn7MYVM77cpZcpLwWSbQk6764p_wg.JPEG%2FB3A23A52-B2AD-43F8-9C84-D09E1CF108FC.jpeg',
        opening_hours: '월~일 11:30-23:00 (브레이크 타임 15:00-17:00)',
        closed_day: '없음',
        href: 'blog_25.html',
    },
    {
        // 11
        name: '만나떡볶이',
        address: '서울 성동구 왕십리로 24길 27 ',
        category: '분식',
        district: '성동구',
        coordinate: [37.48849, 126.997],
        src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTBfMTcy/MDAxNjAyMzEzNTEzMjQy.NDVME6uhzdMmR5jecPi9DGftI2irIlamCiMcBlH0R60g.A4rmUqg4FPAcmvPHJyjcQIOb4SobMGAIp5LtZh4Lvmgg.JPEG.suitesoo11/1602313513237.jpg?type=w800',
        opening_hours: '월~토 10:30-23:00',
        closed_day: '일요일',
        href: 'blog_24.html',
    },
    {
        // 12
        name: '신사시장 떡복이',
        address: '서울 강남구 압구정로 29길 72-1',
        category: '분식',
        district: '강남구',
        coordinate: [37.48847, 126.997],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%8B%AC%EB%8B%AC-%EB%96%A2%EB%BD%80%EB%81%BC-1024x1024.jpeg',
        opening_hours: '월~토 10:00-17:00',
        closed_day: '일요일',
        href: 'blog_8.html',
    },

    //흠...
    {
        // 완료됨
        name: '일일시호일',
        address: '서울 서초구 나루터로 79',
        category: '일식',
        district: '서초구',
        coordinate: [37.51617, 127.0185],
        src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EA%B9%80-1.jpeg',
        opening_hours: '월~금 11:00-20:30',
        closed_day: '토요일,일요일,공휴일 휴무',
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
        opening_hours: '월~토 11:30-20:00',
        closed_day: '일요일,공휴일 휴무',
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
        opening_hours: '월~일 11:00-21:30',
        closed_day: '공휴일 휴무',
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
        opening_hours: '월~토 11:30-20:00',
        closed_day: '일요일,공휴일 휴무',
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
        opening_hours: '월~토 07:00-19:30 (일 16시 마감)',
        // 재료 소진시 조기마감
        closed_day: '재료 소진시 조기마감, 공휴일 휴무',
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
        opening_hours: '월~금 11:30-20:50, 토~일 12:00-21:00',
        closed_day: '공휴일 휴무',
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
        opening_hours: '수~일 11:30-21:00',
        closed_day: '월요일,화요일,공휴일 휴무',
        href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    },
    // {
    //     // 15 + 아직 영업일 시간 작성못함
    //     name: '마구로쇼큐도',
    //     address: '서울 성동구 상원2길 1',
    //     category: '일식',
    //     district: '성동구',
    //     coordinate: [37.54623, 127.0492],
    //     src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EC%B0%B8%EC%B9%98%EC%82%BF.jpeg',
    //     opening_hours: '월~토 12:00-22:00 (일 18시 마감)',
    //     closed_day: '공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
    // {
    //     // 16
    //     name: '멘야신',
    //     address: '서울 성동구 독서당로 51길 15',
    //     category: '일식',
    //     district: '성동구',
    //     coordinate: [37.54966, 127.0264],
    //     src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%9D%BC%EB%A9%98%EC%A7%91.jpeg',
    //     opening_hours: '월~토 11:00-21:00',
    //     closed_day: '일요일,공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
    // {
    //     // 블로그 참조
    //     name: '춘향미엔',
    //     address: '서울 성동구 왕십리로 21길 26',
    //     category: '중식',
    //     district: '성동구',
    //     coordinate: [37.56072, 127.0319],
    //     src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcyD5qY%2FbtrCQwt4QLC%2F9KuLsVDdlfuX8XTVlw81Tk%2Fimg.jpg',
    //     opening_hours: '월~금 11:00-03:00 (토 02시30분 일 22시 마감)',
    //     closed_day: '공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
    // {
    //     // 3
    //     name: '명가떡볶이',
    //     address: '서울 성동구 장터길 25-2 ',
    //     category: '분식',
    //     district: '성동구',
    //     coordinate: [37.54863, 127.0188],
    //     src: 'https://www.foodinko.com/wp-content/uploads/2023/11/%EB%B0%80%EB%96%A1%EC%8C%80%EB%96%A1.jpeg',
    //     opening_hours: '월~토 10:30-23:00',
    //     closed_day: '일요일,공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
    // {
    //     // 블로그 참조
    //     name: '만나떡볶이',
    //     address: '서울 성동구 왕십리로24길 27',
    //     category: '분식',
    //     district: '성동구',
    //     coordinate: [37.56498, 127.0342],
    //     src: 'https://img.siksinhot.com/place/1519352255747611.jpg?w=307&h=300&c=Y',
    //     opening_hours: '월~금 09:00-19:00 토~일 09:00-15:00',
    //     closed_day: '공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
    // {
    //     // 블로그 참조
    //     name: '오프트', // 이름 수정 오포트
    //     address: '서울 성동구 왕십리로 10길 20',
    //     category: '분식',
    //     district: '성동구',
    //     coordinate: [37.54667, 127.0466],
    //     src: 'https://www.foodinko.com/wp-content/uploads/2023/12/%EB%B9%B5%EC%A7%80%EC%88%9C%EB%A1%80.jpeg',
    //     opening_hours: '월~토 11:30-22:00 (일 18시 마감)',
    //     closed_day: '공휴일 휴무',
    //     href: 'https://www.foodinko.com/%ec%a7%80%ea%b8%88%ea%b9%8c%ec%a7%80-%eb%a8%b9%ec%97%88%eb%8d%98-%ea%b1%b4-%ea%b9%8c%eb%88%8c%eb%a0%88%ea%b0%80-%ec%95%84%eb%8b%88%eb%8b%a4/',
    // },
];
// 2 5 8 11 14 17 20 23 24 26
