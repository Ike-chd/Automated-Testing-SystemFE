var course = JSON.parse(localStorage.getItem('currentCourse'));

document.getElementById('cname').value = course.courseName;
document.getElementById('cnum').value = course.courseNumber;
$(function () {
    $('#submit').click(function () {
        check = 0;
        var data = {
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
            data: JSON.stringify(data)
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    });
    
});
