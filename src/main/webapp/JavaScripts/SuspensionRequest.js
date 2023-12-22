var ip = "192.168.8.113";
var input;
var students;
var startDate;
var endDate;

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/allStudents",
        success: function (allStudents) {
            students = allStudents;
            $.each(students, function (i, student) {
                $('#dropdown-menu').append('<li id=' + i + '>' + student.name + ' ' + student.surname + '</li>');
            });

            $('.dropdown').click(function () {
                $(this).attr('tabindex', 1).focus();
                $(this).toggleClass('active');
                $(this).find('.dropdown-menu').slideToggle(300);
            });

            $('.dropdown').focusout(function () {
                $(this).removeClass('active');
                $(this).find('.dropdown-menu').slideUp(300);
            });

            $('.dropdown .dropdown-menu li').click(function () {
                $(this).parents('.dropdown').find('span').text($(this).text());
                $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
            });

            $('.dropdown-menu li').click(function () {
                input = $(this).parents('.dropdown').find('input').val(),
                        msg = '<span id="input" class="msg">';
                $('.msg').html(msg + input + '</span>');
            });
        }
    });

    $('#submit').click(function () {
        startDate = new Date($('#start').val());
        endDate = new Date($('#end').val());
        var data = {
            student: students[parseInt($('#input').html())],
            reason: $('#reason').html(),
            requestedBy: {
                userID: 12
            },
            start: startDate.getTime(),
            duration: endDate.getTime() - startDate.getTime(),
            active: false
        };

        console.log(data);

        $.ajax({
            url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/admitsrq',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Requst successfully admitted...");
                    window.history.go(-1);
                }
            }
        });
    });
});
