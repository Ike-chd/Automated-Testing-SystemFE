var allCourses;
var courseId;
var Course;
var ip = "localhost";

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/allCourses",
        success: function (courses) {
            console.log(courses);
            allCourses = courses;
            $.each(courses, function (i, course) {
                $('#allcourses').append('\
<a id="c' + i + '" class="tests" href="takeTest.html">\n\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + course.courseName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-check-double"></i><span>80 marks</span>\n\
        </h5><h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-time-five"></i><span class="time">2:30</span></h5>\n\
    </div>\n\
</a>');
            });
        }
    });
});