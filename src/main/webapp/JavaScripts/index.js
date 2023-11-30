$(function () {
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });

    var $name = $('#name');
    var $surname = $('#surname');
    var $email = $('#email');
    var $dob = $('#dob');
    var $id = $('#idnumber');

    $('#submit').click(function () {
        var account = {
            name: $name.val(),
            surname: $surname.val(),
            email: $email.val(),
            idNumber: $id.val()
        };
        var settings = {
            url: "http://localhost:8080/Automated-Testing-SystemBE/resources/account/request",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: account
        };

        console.log(account);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

});