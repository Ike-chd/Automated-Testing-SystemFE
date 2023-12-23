var ans = 0;
var check = 0;
var allTopics;
var ip = sessionStorage.getItem('ip');
var inp;

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
            question: $('#q').html(),
            markAllocation: $('#mark').val(),
            topic: allTopics[parseInt($('#input').html())],
            answers: answers
        };

        console.log(data);

        var sTopic = document.getElementById('topics');
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/questions/postQuestion",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            complete: function(response){
                if(response.status >= 200 && response.status <= 299){
                    alert("Question successfully created...");
                    window.history.go(-1);
                }
            }
        };

        console.log(data);

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
});