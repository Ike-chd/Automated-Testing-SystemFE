var ip = sessionStorage.getItem('ip');

$(function () {
    var answer = JSON.parse(sessionStorage.getItem('ans'));
    $('#answer').html(answer.answer);
    $('#checked').checked = answer.isCorrect;

    var answer = {
        text: $('#answer').val(),
        isCorrect: $('#check').checked
    };

    var answerCall = {
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resourses/answers/updateAnswer",
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    data: JSON.stringify(answer);

    $.ajax(answerCall).done(function (response) {
        console.log(response);
    });
});