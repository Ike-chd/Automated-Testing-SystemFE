$(function () {
    $('#s1').mouseenter(function () {
        $(document.getElementById('f1')).slideDown(250);
        document.getElementById('f1').style.display = 'flex';
    });
    $('#s1').mouseleave(function () {
        $(document.getElementById('f1')).slideUp(250);
//        document.getElementById('f1').style.display = 'flex';
    });
});