var allCourses;
var courseId;
var Course;
var ip = "192.168.8.131";
var Courses;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/allCourses",
        success: function (courses) {
            console.log(courses);
            allCourses = courses;
            $.each(courses, function (i, course) {
                $('#allcourses').append('\
<a id="c' + i + '" class="courses" href="updateCourse.html">\n\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + course.courseName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-id-card"></i><span class="time">' + course.courseNumber + '</span></h5>\n\
    </div>\n\
</a>');
            });
            Courses = document.getElementsByClassName('courses');
            for (var i = 0; i < Courses.length; i++) {
                Courses[i].addEventListener('click', function () {
                    localStorage.setItem("currentCourse", JSON.stringify(allCourses[parseInt(this.id[1])]));
                });
            }
        }
    });

//    $('.courses').click(function () {
//        localStorage.setItem('currentCourse', JSON.stringify(allCourses[parseInt($(this).attr('id')[1])]));
//    });
});