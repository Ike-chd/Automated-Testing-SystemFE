var allCourses;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/allCourses",
        success: function (courses) {
            allCourses = courses;
            $.each(courses, function (i, course) {
                $('#allcourses').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + course.courseName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-id-card"></i><span class="time">' + course.courseNumber + '</span></h5>\n\
        <div style="margin-top: 7px;" id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">View All Modules</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
        </div>\n\
        <div style="margin-top: 7px;" id="f1" class="btnflex">\n\
            <button class="btn ' + i + '" style="width: 50%;">Edit Modules</button>\n\
        </div>\n\
    </div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Update') {
                        update(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'View All Modules') {
                        viewAll(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Delete') {
                        Delete(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Edit Modules'){
                        EditModules(parseInt(this.classList[1]));
                    }
                });
            }

            function update(i) {
                sessionStorage.setItem('course', JSON.stringify(allCourses[i]));
                window.location.href = 'updateCourse.html';
            }

            function viewAll(i) {
                sessionStorage.setItem('cid', allCourses[i].courseID);
                window.location.href = 'allCourseModules.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Course | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/deleteCourse/" + allCourses[i].courseID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Course successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("There are still students in this course. Please remove them first");
                            }
                        }
                    });
                }
            }
            
            function EditModules(i){
                sessionStorage.setItem('cid', allCourses[i].courseID);
                window.location.href = 'pickModules.html';
            }
        }
    });
});