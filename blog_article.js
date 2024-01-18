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
