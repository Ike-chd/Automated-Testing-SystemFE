$(document).ready(function () {

    $('#submitComment').click(function () {
        var studentId = $('#studentId').val();
        var commentText = $('#commentText').val();
        var ip = "localhost";

        $.ajax({
            type: 'POST',
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments/allComments",
            data: {
                studentId: studentId,
                commentText: commentText
            },
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.error(error);
            }
        });
    });
});
