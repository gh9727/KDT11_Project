var menus = document.getElementsByClassName('bottom-box');
var currentMenuIndex = 0;

function showMenu(index) {
    for (var i = 0; i < menus.length; i++) {
        if (i === index) {
            menus[i].style.display = 'block';
        } else {
            menus[i].style.display = 'none';
        }
    }
}

function getCurrentMenuIndex() {
    var date = new Date();
    var hour = date.getHours();

    if (hour >= 6 && hour < 10) {
        return 0; // 아침
    } else if (hour >= 12 && hour < 15) {
        return 1; // 점심
    } else if (hour >= 18 && hour < 21) {
        return 2; // 저녁
    } else {
        return 3; // 간식
    }
}

function nextMenu() {
    currentMenuIndex = (currentMenuIndex + 1) % menus.length;
    showMenu(currentMenuIndex);
}

function previousMenu() {
    currentMenuIndex = (currentMenuIndex - 1 + menus.length) % menus.length;
    showMenu(currentMenuIndex);
}

// 초기 화면 설정
window.onload = function () {
    currentMenuIndex = getCurrentMenuIndex();
    showMenu(currentMenuIndex);
};
