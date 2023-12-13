var ip = "192.168.8.131";

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (topics) {
            allTopics = topics;
            $.each(topics, function (i, topic) {
                $('#topics').append('<li id=' + i + ' value=' + i + '>' + topic.topicName + '</li>');
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
                var input = $(this).parents('.dropdown').find('input').val(),
                        msg = '<span id="input" class="msg">';
                $('.msg').html(msg + this.id + '</span>');
            });
        },
        error: function () {
            console.log("Not Found");
        }
    });
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });
    var $moduleName = $('#module-name');
    var $moduleDescription = $('#module-description');
    var $numTests = $('#num-tests');

    $('#submit').click(function (event) {
        event.preventDefault();
        var module = {
            moduleName: $moduleName.val(),
            moduleDescription: $moduleDescription.val(),
            numTests: $numTests.val()
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/create",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(module)
        };
        console.log(module);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    $('#add').click(function () {
        $('#contain').show();
    });
});