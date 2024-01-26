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
        name: '프린츠 양재점',
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
        name: '런던 베이글 뮤지엄',
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
];
