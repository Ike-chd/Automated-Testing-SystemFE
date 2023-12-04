$(function () {
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });
    var $courseName = $('#course-name');
    var $courseNumber = $('#course-number');
    var $courseDescription = $('#course-description');
    $('#Create Course').click(function () {
        var course = {
            courseName: $courseName.val(),
            courseNumber: $courseNumber.val(),
            courseDescription: $courseDescription.val()
        };
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/courses/create",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(course)
        };

        console.log(course);

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});
