var ip = "192.168.8.113";

$(function () {
    $('#s1').mouseenter(function () {
        $(document.getElementById('f1')).slideDown(250);
        document.getElementById('f1').style.display = 'flex';
    });
    $('#s1').mouseleave(function () {
        $(document.getElementById('f1')).slideUp(250);
//        document.getElementById('f1').style.display = 'flex';
    });
});

$(function () {
    var $students = $('#students');

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/allStudents",
        success: function (students) {
            $.each(students, function (i, student) {
                $students.append('\n\
<div id="s' + i + '" class="wrapper">\n\
    <h1 style="display: inline">' + student.name + ' ' + student.surname + '</h1>\n\
    <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-id-card"></i>' + student.idNumber + '</h5>\n\
    <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-envelope"></i>' + student.email + '</h5>\n\
    <div id="f' + i + '" class="btnflex">\n\
        <button class="btn">Comment</button>\n\
        <button class="btn">Suspend</button>\n\
        <button class="btn">Report</button>\n\
    </div>\n\
</div>');
                $('#s' + i).mouseenter(function () {
                    $(document.getElementById('#f' + i)).slideDown(250);
                    document.getElementById('#f' + i).style.display = 'flex';
                });
                $('#s' + i).mouseleave(function () {
                    $(document.getElementById('#f' + i)).slideUp(250);
                });
            });
        }
    });
});
