var ip = sessionStorage.getItem('ip');
var course = JSON.parse(sessionStorage.getItem('course'));

document.getElementById('cname').value = course.courseName;
document.getElementById('cnum').value = course.courseNumber;
$(function () {
    $('#submit').click(function () {
        check = 0;
        var data = {
            courseID: course.courseID,
            courseName: $('#cname').val(),
            courseNumber: $('#cnum').val()
        };
        console.log(data);
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/updateCourse",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Course successfully updated...");
                    sessionStorage.removeItem('course');
                    window.history.go(-1);
                } else {
                    alert("Course Not updated successfully");
                }
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    });

});
