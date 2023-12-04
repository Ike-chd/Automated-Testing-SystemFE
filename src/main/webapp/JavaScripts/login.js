var lock = document.getElementById('lock');
var open = document.getElementById('olock');
var password = document.getElementById('password');

lock.addEventListener('click', hideL);
open.addEventListener('click', hideO);

function hideL() {
    lock.style.display = 'none';
    open.style.display = 'block';
    password.type = 'text';
};

function hideO() {
    lock.style.display = 'block';
    open.style.display = 'none';
    password.type = 'password';
};

$(function () {
    $('#log').click(function () {
        $('#wr1').fadeIn(1000);
        $('#wr2').fadeOut(0);
    });
    
    $('#reg').click(function () {
        $('#wr2').fadeIn(1000);
        $('#wr1').fadeOut(0);
    });
});