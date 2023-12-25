var allComments;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments/fac/allComments/" + sessionStorage.getItem('userID'),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (comments) {
            allComments = comments;
            $.each(comments, function (i, comment) {
                var commentDate = new Date();
                commentDate.setTime(comment.commentDate);
                $('#comments').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + comment.comment + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span> for: ' + comment.student.name + ' ' + comment.student.surname + '</span></h5>\n\
        <h5 style="margin-left: 5px;"><i class="bx bxs-calendar"></i><span>' + commentDate + '</span></h5>\n\
        <div id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
        </div>\n\
    </div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Update') {
                        update(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Delete') {
                        Delete(parseInt(this.classList[1]));
                    }
                });
            }

            function update(i) {
                sessionStorage.setItem('mod', JSON.stringify(allComments[i]));
                window.location.href = 'updateComment.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Comment | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comment/deleteComment/" + allComments[i].commentId,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Comment successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Comment Not deleted successfully");
                            }
                        }
                    });
                }
            }
        },
        error: function () {
            alert("No comments found, try reloading the page");
        }
    });
});