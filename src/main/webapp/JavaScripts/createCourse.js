$(function () {
    var $cname = $('#cname');
    var $cnum = $('#cnum');
    var ip = "localhost";

    $('#submit').click(function () {
        check = 0;
        var data = {
            courseName: $cname.val(),
            courseNumber: $cnum.val()
        };
        console.log(data);
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/postCourse",
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