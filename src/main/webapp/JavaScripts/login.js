var lock = document.getElementById('lock');
var open = document.getElementById('olock');
var password = document.getElementById('password');
var ip = "192.168.8.131";

lock.addEventListener('click', hideL);
open.addEventListener('click', hideO);

function hideL() {
    lock.style.display = 'none';
    open.style.display = 'block';
    password.type = 'text';
}

function hideO() {
    lock.style.display = 'block';
    open.style.display = 'none';
    password.type = 'password';
}

$(function () {
    var email;
    var password;

    $('#log').click(function () {
        $('#wr1').fadeIn(1000);
        $('#wr2').fadeOut(0);
    });

    $('#reg').click(function () {
        $('#wr2').fadeIn(1000);
        $('#wr1').fadeOut(0);
    });

    $('#email').blur(function () {
        $.ajax({
            type: 'GET',
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/getAccount/byEmail/" + $('#email').val(),
            success: function (account) {
                email = account.email;
                password = account.password;
            }
        });
    });


    $('#lsubmit').click(function () {
        var data = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/create",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };
        console.log(data);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
//    });

        $('#asubmit').click(function () {
            var data = {
                name: $('#name').val(),
                surname: $('#surname').val(),
                email: $('#email2').val(),
                id: $('#id').val(),
                address: $('#address').val(),
                phoneNumber: $('#phone').val()

            };
            var settings = {
                url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/request",
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            };
            console.log(data);
            $.ajax(settings).done(function (response) {
                console.log(response);
            });
            //make rest call on a dot blur event so that we can equate password
        });
    });
});
