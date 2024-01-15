let memberName = ['김지혜', '성명규', '오승용'];
let memberPassword = ['1234', '2345', '3456'];

function join() {
    var id = $('#id').val();

    var password = $('#password').val();

    memberName.push(id);
    memberPassword.push(password);

    $('#id').val(''); // 아이디 입력창 비우기
    $('#password').val(''); //비밀번호 입력창 비우기
}
console.log(memberName);
