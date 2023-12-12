$(function () {
    var $tname = $('#topic');
    var $desc = $('#desc');
    var $link = $('#link');
    var ip = "192.168.8.131";

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