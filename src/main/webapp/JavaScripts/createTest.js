var ip = "192.168.8.113";
var allModules;
var allTopics;
var sendingTopics;
var topics;
var input;
var date;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/allModules",
        success: function (modules) {
            allModules = modules;
            $.each(modules, function (i, module) {
                $('#modules').append('<li id=' + i + ' value=' + i + '>' + module.moduleName + '</li>');
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
                input = $(this).parents('.dropdown').find('input').val();
            });
        },
        error: function () {
            console.log("Not Found");
        }
    });
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (Topics) {
            allTopics = Topics;
            $.each(Topics, function (i, topic) {
                $('#allTopics').append('\
<label class="container">' + topic.topicName + '\
    <input class="topics" id="' + i + '" type="checkbox" name="category" value="' + i + '">\n\
    <span class="checkmark"></span>\n\
</label>');
            });
        }
    });

    topics = document.getElementsByClassName('topics');
    var closebtn = document.getElementsByClassName('close');

    closebtn[0].addEventListener('click', function () {
        $('#topics').empty();
        sendingTopics = $('.topics').map(function () {
            if (this.checked) {
                return allTopics[parseInt(this.id)];
            }
        }).get();
        for (var i = 0; i < topics.length; i++) {
            if (topics[i].checked) {
                var topic = allTopics[i];
                $('#topics').append('\
    <div class="wrapper" style="width: 100%; margin-bottom: 5px;">\n\
        <h2 style="display: inline; color: var(--dark);">' + topic.topicName + '</h2>\n\
        <h5 style="display: inline; margin-left: 30px; color: var(--dark);"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + topic.infoLink + '</span>\n\
        </h5><h5 style="display: block; margin-left: 30px; color: var(--dark);"><i class="fa fa-list" aria-hidden="true" style="margin-right: 5px;"></i><span class="time">' + topic.description + '</span></h5>\n\
    </div>');
            }
        }
    });

    $('#add').click(function () {
        sendingModules = [];

    });

    $('#submit').click(function () {
        date = new Date($('#start').val());
        date.setHours(0, 0, 0, 0);
        var test = {
            testName: $('#test').val(),
            module: allModules[parseInt(input)],
            topics: sendingTopics,
            duration: (parseInt($('#hours').val()) * 3600) + (parseInt($('#mins').val()) * 60),
            startDate: date.getTime()
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/postTest",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(test),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Test successfully created...");
                    window.history.go(-1);
                } else {
                    alert("Test NOT successfully created...");
                }
            }
        };
        console.log(test);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    $('#add').click(function () {
        $('#contain').show();
    });
});