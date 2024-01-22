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
//  대략적인 틀만 구성함 21:05
// {012 345 678 9111 111213 141516 171819 202122 2324 0}
//           {{ 2324,0 123 456 }}

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
    console.log(index);
    console.log(index + 1);
    console.log(index + 2);
}

updateMenu(index);
