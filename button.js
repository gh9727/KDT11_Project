let btn = document.querySelector('.btn');
let img = ['디저트.png', '분식.png', '양식.png', '일식.png', '중식.png', '한식.png'];
let back = -3;
let front = 3;

let index = 0;
$('.btn').click(function () {
    if (index == 0) {
        index = 25;
        $('.container .img1').attr('src', img[index - 3]);
        $('.container .img2').attr('src', img[index - 2]);
        $('.container .img3').attr('src', img[index - 1]);
    }
    index += back;
    console.log(index);
});

$('.btn2').click(function () {
    if (index > 22) {
        index = 0;
        $('.container .img1').attr('src', img[index]);
        $('.container .img2').attr('src', img[index + 1]);
        $('.container .img3').attr('src', img[index + 2]);
    }
    index += front;
    console.log(index);
});
