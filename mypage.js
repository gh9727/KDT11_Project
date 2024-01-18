$(function () {
    $('.save').click(function () {
        // 저장할 정보
        var saveData = {
            // 저장할 데이터를 여기에 추가하세요
            key1: 'article_wrapper',
        };

        // 다른 페이지로 정보 전송
        sendSaveData(saveData);
    });

    function sendSaveData(data) {
        // 정보를 전송할 다른 페이지의 URL을 입력하세요
        var targetURL = 'mypage.html';

        // 정보를 전송할 폼 생성
        var form = document.createElement('form');
        form.method = 'POST';
        form.action = targetURL;

        // 정보를 input 필드로 추가
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = data[key];
                form.appendChild(input);
            }
        }

        // 폼을 body에 추가하고 전송
        document.body.appendChild(form);
        form.submit();
    }
});
