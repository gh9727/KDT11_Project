let memberNames = ['김지혜', '성명규', '오승용'];
let memberPasswords = ['1234', '2345', '3456'];
let state = 'logout';
function logIn() {
    var id = $('#id').val();
    var password = $('#password').val();
    for (let i = 0; i <= memberNames.length; i++) {
        if (id === memberNames[i] && password === memberPasswords[i]) {
            alert('로그인');
            location.replace('index.html'); //메인화면으로 이동
            state = 'login';
        }
    }
    if (state === 'logout') {
        alert('아이디/비밀번호가 틀립니다.');
        $('#id').val('');
        $('#password').val('');
    }
}
function join() {
    var id = $('#id').val();

    var password = $('#password').val();

    memberNames.push(id);
    memberPasswords.push(password);

    $('#id').val(''); // 아이디 입력창 비우기
    $('#password').val(''); //비밀번호 입력창 비우기
}
