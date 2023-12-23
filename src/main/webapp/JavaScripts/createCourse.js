var ip = sessionStorage.getItem('ip');

$(function () {
    var $cname = $('#cname');
    var $cnum = $('#cnum');

    $('#submit').click(function () {
        check = 0;
        var data = {
            courseName: $cname.val(),
            courseNumber: $cnum.val()
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/postCourse",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            complete: function(response){
                if(response.status >= 200 && response.status <= 299){
                    alert("Course successfully created...");
                    window.history.go(-1);
                }
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            alert("Course successfully added");
        });
    });
});