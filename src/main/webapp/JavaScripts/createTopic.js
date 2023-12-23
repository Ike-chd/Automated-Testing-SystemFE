var $tname = $('#topic');
var $desc = $('#desc');
var $link = $('#link');
var ip = sessionStorage.getItem('ip');

$(function () {

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
            data: JSON.stringify(data),
            complete: function(response){
                if(response.status >= 200 && response.status <= 299){
                    alert("Topic successfully created...");
                    window.history.go(-1);
                } else {
                    alert("Topic NOT successfully created...");
                }
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});