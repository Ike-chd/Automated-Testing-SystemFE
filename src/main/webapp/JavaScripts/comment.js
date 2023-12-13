$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/Automated-Testing-SystemBE/resources/students/getStudentByid`",
        success: function (students) {
            var selectElement = $('#studentId');
            students.forEach(function (student) {
                selectElement.append($('<option>', {
                    value: student.userID,
                    text: student.firstname + ' ' + student.surname
                }));
            });
        }
    });

    $('#submitComment').click(function () {
        var studentId = $('#studentId').val();
        var commentText = $('#commentText').val();

        $.ajax({
            type: 'POST',
            url: "http://localhost:8080/Automated-Testing-SystemBE/resources/comments/postComment",
            contentType: 'application/json',
            data: JSON.stringify({
                studentId: studentId,
                comment: commentText
            }),
            success: function (response) {
                console.log(response);
            }
        });
    });
});
