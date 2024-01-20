'use strict';

let memberNames = ['김지혜', '성명규', '오승용'];
let memberPasswords = ['1234', '2345', '3456'];
let state = 'logout'; //로그인 여부
// 기본값으로 로그 아웃 상태 sessionStorage에 저장
window.sessionStorage.setItem('state', 'logout');
let finishCheckPw = 'no'; //비밀번호 확인여부
//로그인
function logIn() {
    console.log(memberNames);
    console.log(memberPasswords);
    var id = $('#floatingInput').val();
    var password = $('#floatingPassword').val();
    for (let i = 0; i <= memberNames.length; i++) {
        if (id === memberNames[i] && password === memberPasswords[i]) {
            alert('로그인');
            location.replace('main-mobile.html'); //메인화면으로 이동
            state = 'login';
            // 로그인 성공 시 기본값 로그아웃 -> 로그인 상태로 상태 업데이트
            window.sessionStorage.setItem('state', 'login');
        }
    }
    if (state === 'logout') {
        alert('아이디/비밀번호가 틀립니다.');
        $('#floatingInput').val('');
        $('#floatingPassword').val('');
    }
}
//회원가입
function join() {
    var id = $('#floatingInput').val();
    var password = $('#floatingPassword').val();
    //아이디 비밀번호 중복 확인
    var check_id = memberNames.includes(id); //있다면 true
    var check_pw = memberPasswords.includes(password);
    if (check_id === true || check_pw === true) {
        alert(
            '이미 존재하는 아이디 / 비밀번호 입니다.\n다른 아이디 / 비밀번호를 입력해주세요.'
        );
        $('#id').val('');
        $('#password').val('');
        $('#passwordCheck').val('');
    }
    //회원가입
    if (check_id === false && check_pw === false && finishCheckPw === 'yes') {
        memberNames.push(id);
        memberPasswords.push(password);
        console.log(memberNames);
        console.log(memberPasswords);
        alert('회원가입 완료\n로그인 화면으로 이동합니다.  ');
        location.replace('login.html'); //로그인 이동
    }

    $('#floatingInput').val(''); // 아이디 입력창 비우기
    $('#floatingPassword').val(''); //비밀번호 입력창 비우기
}
//비밀번호 확인
function password_check() {
    if ($('#floatingPassword').val() !== $('#passwordCheck').val()) {
        alert('비밀번호를 다시 입력하세요.');
        $('#floatingPassword').val('');
        $('#passwordCheck').val('');
    } else if (
        $('#floatingPassword').val() == '' ||
        $('#passwordCheck').val() == ''
    ) {
        alert('비밀번호를 입력하세요.');
    } else if ($('#floatingPassword').val() === $('#passwordCheck').val()) {
        alert('비밀번호가 일치합니다.');
        finishCheckPw = 'yes';
    }
}
