var allStudents;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    var $students = $('#allStudents');

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/allStudents",
        success: function (students) {
            allStudents = students;
            $.each(students, function (i, student) {
                $students.append('\n\
<div id="s' + i + '" class="wrapper">\n\
    <h1 style="display: inline">' + student.name + ' ' + student.surname + '</h1>\n\
    <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-envelope" style="margin-right: 5px;"></i>' + student.email + '</h5>\n\
    <h5 style="display: block;"><i class="bx bxs-id-card" style="margin-right: 5px;"></i>' + student.idNumber + '</h5>\n\
    <h5 style="display: block;"><i class="bx bxs-id-card" style="margin-right: 5px;"></i>' + student.address + '</h5>\n\
    <h3 style="display: block;"><i class="bx bxs-id-card" style="margin-right: 5px;"></i>' + student.currentCourse.courseName + '</h3>\n\
    <div id="f1" class="btnflex">\n\
        <button class="btn ' + i + '">Comment</button>\n\
        <button class="btn ' + i + '">Request Suspension</button>\n\
        <button class="btn ' + i + '">View Report</button>\n\
    </div>\n\
</div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Comment') {
                        comment(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Request Suspension') {
                        RequestSus(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'View Report') {
                        report(parseInt(this.classList[1]));
                    }
                });
            }

            function comment(i) {
                sessionStorage.setItem('stu', JSON.stringify(allStudents[i]));
                window.location.href = 'stuComment.html';
            }

            function RequestSus(i) {
                sessionStorage.setItem('stu', JSON.stringify(allStudents[i]));
                window.location.href = 'stuRequest.html';
            }

            function report(i) {
               sessionStorage.setItem('mod', JSON.stringify(allStudents[i]));
               window.location.href = 'Report.html';
            }
        }
    });
});
