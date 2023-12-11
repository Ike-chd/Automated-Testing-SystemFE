$(function () {
    var $sbtn = $('#sbtn');
    var $fbtn = $('#fbtn');
    var $abtn = $('#abtn');
    $sbtn.click(function () {
        $('#wr2').fadeOut(1000);
        $('#wr3').fadeOut(1000);
        $('#wr1').fadeIn(1000);
    });
    $fbtn.click(function () {
        $('#wr1').fadeOut(1000);
        $('#wr3').fadeOut(1000);
        $('#wr2').fadeIn(1000);
    });
    $abtn.click(function () {
        $('#wr1').fadeOut(1000);
        $('#wr2').fadeOut(1000);
        $('#wr3').fadeIn(1000);
    });
    
    $('#createS').click(function () {
        var course = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            idNumber: $('#id').val(),
            address: $('#address').val(),
            phoneNumber: $('#phone').val()
        };
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/students/createAccount/1",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(course)
        };

        console.log(course);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
    
    $('#createF').click(function () {
        var course = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            idNumber: $('#id').val(),
            professor: document.querySelector('#professor').checked
        };
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/accounts/createAccount/facM",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(course)
        };

        console.log(course);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
    
    $('#createA').click(function () {
        var data = {
            name: $('#name3').val(),
            surname: $('#surname3').val(),
            email: $('#email3').val(),
            idNumber: $('#id3').val(),
            superAdmin: document.querySelector('#superAdmin').checked
        };
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/accounts/createAccount/admin",
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
    });
});