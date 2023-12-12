$(function () {
    var $commentInput = $('#comment');
    var ip = "192.168.8.131";
    var studentId = 1;

    loadComments();

    function formatCommentDate(dateString) {
        var options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    function loadComments() {
        var $commentsContainer = $('#comments-container');

        $.ajax({
            type: 'GET',
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments?studentId=" + studentId,
            success: function (comments) {
                $commentsContainer.empty();  // Clear existing comments
                $.each(comments, function (i, comment) {
                    var formattedDate = formatCommentDate(comment.commentDate);
                    var commentElement = $('<div class="comment">')
                            .append('<p><strong>' + comment.faculty.firstName + ' ' + comment.faculty.lastName +
                                    '</strong>: ' + comment.comment + '</p>')
                            .append('<small>' + formattedDate + '</small>');

                    $commentsContainer.append(commentElement);
                });
            }
        });
    }

    $('#submitComment').click(function () {
        var commentText = $commentInput.val().trim();

        if (commentText !== '') {
            var commentData = {
                comment: commentText,
                userID: 1,
                studentID: studentId
            };

            var settings = {
                url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments",
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(commentData)
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
                $commentInput.val('');

                loadComments();
            });
        }
    });
});
