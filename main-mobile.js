// let back_button = document.querySelector('.back_button');
// let next_button = document.querySelector('.next_button');

// var index = 0;
// var next = 3;
// var back = -3;
// back_button.onclick = function () {
//     if (index === 0) {
//         index = 18;
//         $('.choice1 .btn1').attr('src', `${resturant[index - 3].src}`);
//         $('.choice2 .btn2').attr('src', `${resturant[index - 2].src}`);
//         $('.choice3 .btn3').attr('src', `${resturant[index - 1].src}`);
//         $('.box_btn1').text(`${resturant[index - 3].name}`);
//         $('.box_btn2').text(`${resturant[index - 2].name}`);
//         $('.box_btn3').text(`${resturant[index - 1].name}`);
//         console.log(index - 3);
//         console.log(index - 2);
//         console.log(index - 1);
//         index += back;
//     } else {
//         index += back;
//         if (index === 0) {
//             index = 18;
//             $('.choice1 .btn1').attr('src', `${resturant[index - 3].src}`);
//             $('.choice2 .btn2').attr('src', `${resturant[index - 2].src}`);
//             $('.choice3 .btn3').attr('src', `${resturant[index - 1].src}`);
//             $('.box_btn1').text(`${resturant[index - 3].name}`);
//             $('.box_btn2').text(`${resturant[index - 2].name}`);
//             $('.box_btn3').text(`${resturant[index - 1].name}`);
//         }
//         $('.choice1 .btn1').attr('src', `${resturant[index - 3].src}`);
//         $('.choice2 .btn2').attr('src', `${resturant[index - 2].src}`);
//         $('.choice3 .btn3').attr('src', `${resturant[index - 1].src}`);
//         $('.box_btn1').text(`${resturant[index - 3].name}`);
//         $('.box_btn2').text(`${resturant[index - 2].name}`);
//         $('.box_btn3').text(`${resturant[index - 1].name}`);
//         console.log(index - 3);
//         console.log(index - 2);
//         console.log(index - 1);
//     }
//     index = index;
// };

// next_button.onclick = function () {
//     if (index >= 17) {
//         index = 0;
//         $('.choice1 .btn1').attr('src', `${resturant[index].src}`);
//         $('.choice2 .btn2').attr('src', `${resturant[index + 1].src}`);
//         $('.choice3 .btn3').attr('src', `${resturant[index + 2].src}`);
//         $('.box_btn1').text(`${resturant[index].name}`);
//         $('.box_btn2').text(`${resturant[index + 1].name}`);
//         $('.box_btn3').text(`${resturant[index + 2].name}`);
//         console.log(index);
//         console.log(index + 1);
//         console.log(index + 2);
//     } else {
//         $('.choice1 .btn1').attr('src', `${resturant[index].src}`);
//         $('.choice2 .btn2').attr('src', `${resturant[index + 1].src}`);
//         $('.choice3 .btn3').attr('src', `${resturant[index + 2].src}`);
//         $('.box_btn1').text(`${resturant[index].name}`);
//         $('.box_btn2').text(`${resturant[index + 1].name}`);
//         $('.box_btn3').text(`${resturant[index + 2].name}`);
//         console.log(index);
//         console.log(index + 1);
//         console.log(index + 2);
//     }
//     index += next;
// console.log(index);
// };

let back_button = document.querySelector('.back_button');
let next_button = document.querySelector('.next_button');

let index = 0;
let next = 3;
let back = -3;
let currentTime = new Date().getHours();

if (currentTime >= 6 && currentTime < 12) {
    // 아침 시간
    index = 0;
} else if (currentTime >= 12 && currentTime < 15) {
    // 점심 시간
    index = 3;
} else if (currentTime >= 15 && currentTime < 18) {
    // 저녁 시간
    index = 6;
} else {
    // 간식 시간
    index = 9;
}

back_button.onclick = function () {
    if (index === 0) {
        index = 9;
    } else {
        index += back;
        if (index < 0) {
            index = 9;
        }
    }
    updateMenu(index);
};

next_button.onclick = function () {
    if (index >= 9) {
        index = 0;
    } else {
        index += next;
    }
    updateMenu(index);
};

function updateMenu(index) {
    $('.choice1 .btn1').attr('src', `${resturant[index].src}`);
    $('.choice2 .btn2').attr('src', `${resturant[index + 1].src}`);
    $('.choice3 .btn3').attr('src', `${resturant[index + 2].src}`);
    $('.box_btn1').text(`${resturant[index].name}`);
    $('.box_btn2').text(`${resturant[index + 1].name}`);
    $('.box_btn3').text(`${resturant[index + 2].name}`);
    $('.ab').attr('href', `${resturant[index].href}`);
    $('.ab2').attr('href', `${resturant[index + 1].href}`);
    $('.ab3').attr('href', `${resturant[index + 2].href}`);
    console.log(index);
    console.log(index + 1);
    console.log(index + 2);
}

updateMenu(index);

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
