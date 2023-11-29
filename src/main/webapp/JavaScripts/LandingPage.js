$(function () {
    var $name = $('#n');
    var $surname = $('#sn');
    var $email = $('#email');
    var $dob = $('#dob');
    var $pwd = $('#psw');
    
    $('#signup').click(function () {
        $('#fl').slideDown(1000);
        $('#close').click(function () {
            $('#f1').slideUp(1000);
        });
    });

    $('#close').click(function () {
        $('#f1').slideUp(1000);
    });

    $(document.getElementById('btn')).click(function () {
        var account = {
            name : $name.val(),
            surname : $surname.val(),
            email : $email.val(),
            password : $pwd.val(),
            dob : $dob.val()
        };
        console.log(account);
        $.ajax({
            type: 'POST',
            url: "http://localhost:8080/resources/account/request",
            data: account,
            success: function (status) {
                alert('Your request has been submitted. You will recieve an \n\
                    email upon confimation');
            },
            error: function () {

            }
        });
    });
});