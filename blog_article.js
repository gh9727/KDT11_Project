$(function () {
    let num = 0;
    $('.save').click(function () {
        if (num == 0) {
            $(this).attr('src', 'save-yellow.png');
            num = 1;
        } else {
            $(this).attr('src', 'save.png');
            num = 0;
        }
    });
});

function saveMyPage() {
    // 블로그 글의 주소 가져오기
    var blog_url = window.location.href;
    // 블로그 사진 가져오기
    var blog_img = $('.image').attr('src');
    // 블로그 제목 가져오기
    var blog_title = $('.entry-title').text();
    // 블로그의 식당 이름 가져오기
    var blog_restaurant_name = $('.restaurant-name').text();
    // 블로그의 식당 주소 가져오기
    var blog_restaurant_address = $('.restaurant-address-link').text();

    // 'mypage.html' 페이지로 이동하면서 데이터를 전달
    window.location.href =
        'mypage.html?blogPageUrl=' +
        encodeURIComponent(blog_url) +
        '&blogImage=' +
        encodeURIComponent(blog_img) +
        '&blogTitle=' +
        encodeURIComponent(blog_title) +
        '&blogRestaurantName=' +
        encodeURIComponent(blog_restaurant_name) +
        '&blogRestaurantAddress=' +
        encodeURIComponent(blog_restaurant_address);
}

window.onload = function () {
    // mypage.html에서 데이터를 가져와 처리하는 logic
    var urlParams = new URLSearchParams(window.location.search);
    var listUrl = urlParams.get('blogPageUrl');
    var listImage = urlParams.get('blogImage');
    var listTitle = urlParams.get('blogTitle');
    var listRestaurantName = urlParams.get('blogRestaurantName');
    var listRestaurantAddress = urlParams.get('blogRestaurantAddress');
    var url = [];
    // for(let s=1; s<=4;s++){
    //     // sessionStorage에 저장된 정보가 있다면 가져오도록
    //     var url = window.sessionStorage.getItem(`blogitem`)
    // }

    for (let i = 1; i <= 4; i++) {
        // 1부터 4까지 리스트 중에 빈칸이 있는 지 확인
        // 빈칸이 있다면 해당 칸에 blog 글에서 가져온 정보 입력
        // sessionStorage에도 각 정보 저장
        if ($(`.blog-title${i}`).text() == '') {
            if (listUrl) {
                $(`.blog-url${i}`).attr('href', listUrl);
                window.sessionStorage.setItem(`url${i}`, listUrl);
            }
            if (listImage) {
                $(`.blog-image${i}`).attr('src', listImage);
                window.sessionStorage.setItem(`image${i}`, listImage);
            }
            if (listTitle) {
                $(`.blog-title${i}`).text(listTitle);
                window.sessionStorage.setItem(`title${i}`, listTitle);
            }
            if (listRestaurantName) {
                $(`.blog-restaurant-name${i}`).text(`📍Restaurant : 
                ${listRestaurantName}`);
                window.sessionStorage.setItem(`name${i}`, listRestaurantName);
            }
            if (listRestaurantAddress) {
                $(`.blog-restaurant-address${i}`).text(
                    `📍Address : 
                    ${listRestaurantAddress}`
                );
                window.sessionStorage.setItem(
                    `address${i}`,
                    listRestaurantAddress
                );
            }
            // break;
        }
        break;
    }
};

function reset() {}

var state = window.sessionStorage.getItem('state');
console.log(state);
if (state === 'login') {
    $('.header-last').empty();
    $('.header-last').html(
        '<a href="#" class="logout" onclick="logout()">로그아웃</a>'
    );
    window.sessionStorage.setItem('state', 'login');
}
function logout() {
    window.sessionStorage.setItem('state', 'logout');
    $('.header-last').html(
        '<a href="join.html" class="membership">회원가입</a><a href="login.html" class="log">로그인</a>'
    );
}
