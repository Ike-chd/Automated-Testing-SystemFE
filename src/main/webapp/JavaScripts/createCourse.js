$(function () {
    var $cname = $('#cname');
    var $cnum = $('#cnum');

    $('#submit').click(function () {
        check = 0;
        var data = {
            courseName: $cname.val(),
            courseNumber: $cnum.val()
        };
        
        console.log(data);
        var settings = {
            url: "http://192.168.80.170:8080/Automated-Testing-SystemBE/resources/courses/createCourse",
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