$(function () {
    var $tname = $('#topic');
    var $desc = $('#desc');
    var $link = $('#link');

    $('#submit').click(function () {
        check = 0;
        var data = {
            topic: $tname.html(),
            description: $desc.val(),
            infoLink: $link.val()
        };
        
        console.log(data);
        var settings = {
            url: "http://192.168.80.170:8080/Automated-Testing-SystemBE/resources/topic/postTopic",
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