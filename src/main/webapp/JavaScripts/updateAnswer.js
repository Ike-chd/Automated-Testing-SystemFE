var ip = sessionStorage.getItem('ip');

$(function () {
    var answer = JSON.parse(sessionStorage.getItem('ans'));
    $('#answer').html(answer.answer);
    $('#checked').checked = answer.isCorrect;

    var answer = {
        text: $('#answer').val(),
        isCorrect: $('#check').checked
    };

    $('#submit').click(function () {
        var answerCall = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resourses/answers/updateAnswer",
            type: "POST",
            data: JSON.stringify(answer),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function() {
                alert('Answer has been successfully updated');
                window.history.go(-2);
            }
        };

        

        $.ajax(answerCall).done(function (response) {
            console.log(response);
        });
    });
});