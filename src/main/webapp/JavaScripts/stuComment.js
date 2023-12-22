var ip = "192.168.8.113";
var input;
var students;
var startDate;
var endDate;
var student;

$(document).ready(function () {
    student = JSON.parse(sessionStorage.getItem('stu'));
    $('#name').html('Comment on: '+student.name + ' ' + student.surname);

    $('#submit').click(function () {
        var data = {
            student: JSON.parse(sessionStorage.getItem('stu')),
            comment: $('#reason').html(),
            faculty: {
                userID: 12
            },
            commentDate: startDate.getTime()
        };

        console.log(data);

        $.ajax({
            url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/comments/postComment',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
//            complete: function (response) {
//                if (response.status >= 200 && response.status <= 299) {
//                    alert("Requst successfully admitted...");
//                    window.history.go(-1);
//                }
//            }
        });
    });
});