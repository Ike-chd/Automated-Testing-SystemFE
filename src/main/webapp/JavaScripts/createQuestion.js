var $qname = $('#q');
var $mark = $('#mark');
var ans = 0;
var check = 0;
var allTopics;
var ip = "192.168.8.131";

$(function () {
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

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (topics) {
            console.log(topics);
            console.log(topics);
            allTopics = topics;
            $.each(topics, function (i, topic) {
                $('#topics').append('<li value=' + i + '>' + topic.topicName + '</li>');
            });
        },
        error: function() {
            console.log("Not Found");
        }
    });

    console.log(allTopics);

    $('#submit').click(function () {
        var answers = $('.answers').map(function () {
            check++;
            return {
                answer: this.value,
                isCorrect: document.querySelector('#check' + check).checked
            };
        }).get();
        check = 0;
        var data = {
            question: $qname.html(),
            markAllocation: $mark.val(),
            answers: answers,
            topic: allTopics[parseInt($('#input').html())]
        };

        console.log(data);

        var sTopic = document.getElementById('topics');
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/questions/postQuestion",
            method: "POST",
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            },
            data: JSON.stringify(data)
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    $('#add').click(function () {
        ans++;
        $('#answers').append('\
<input type="text" class="answers" id="q' + ans + '">\n\
<label class="container">\n\
    <input type="checkbox" id="check' + ans + '">\n\
    <span class="checkmark"></span>\n\
</label>');
    });
})();
