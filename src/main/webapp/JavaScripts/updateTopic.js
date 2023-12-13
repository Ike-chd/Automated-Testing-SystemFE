var topic = JSON.parse(localStorage.getItem('currentTopic'));
var ip = "192.168.8.131";

document.getElementById('topic').value = JSON.parse(localStorage.getItem('currentTopic')).topicName;
document.getElementById('link').value = JSON.parse(localStorage.getItem('currentTopic')).infoLink;
document.getElementById('desc').innerHTML = JSON.parse(localStorage.getItem('currentTopic')).description;
$(function () {
    var $tname = $('#topic');
    var $desc = $('#desc');
    var $link = $('#link');

    $('#submit').click(function () {
        check = 0;
        var data = {
            topicName: $tname.val(),
            description: $desc.html(),
            infoLink: $link.val()
        };

        console.log(data);
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/postTopic",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});