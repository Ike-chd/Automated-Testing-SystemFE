$(function () {
    var $sbtn = $('#sbtn');
    var $fbtn = $('#fbtn');
    var $abtn = $('#abtn');
    var allCourses;
    var ip = "192.168.8.113";

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

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/allCourses",
        success: function (courses) {
            allCourses = courses;
            $.each(courses, function (i, course) {
                $('#courses').append("<li id=" + i + ">" + course.courseName + "</li>");
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

    $('#createS').click(function () {
        var student = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            idNumber: $('#id').val(),
            address: $('#address').val(),
            phoneNumber: $('#phone').val(),
            password: $('#password').val(),
            currentCourse: allCourses[parseInt($('#input').html())]
        };

        console.log(student);

        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/createAccount",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(student),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Student successfully created...");
                    window.history.go(-1);
                } else {
                    alert("Student Not created successfully");
                }
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    $('#createF').click(function () {
        var course = {
            name: $('#name2').val(),
            surname: $('#surname2').val(),
            email: $('#email2').val(),
            idNumber: $('#id2').val(),
            password: $('#password2').val(),
            isProfessor: $('#input').html() === "true"
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/createAccount/facM",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(course),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Faculty Member successfully created...");
                    window.history.go(-1);
                } else {
                    alert("Faculty Memeber Not created successfully");
                }
            }
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
            password: $('#password3').val(),
            isSuperAdmin: $('#input').html() === "atrue"
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/createAccount/admin",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Admin successfully created...");
                    window.history.go(-1);
                } else {
                    alert("Admin Not created successfully");
                }
            }
        };

        console.log(data);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});