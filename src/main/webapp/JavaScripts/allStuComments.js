var allComments;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        tyep: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments/stu/allComments/" + sessionStorage.getItem('userID'),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (comments) {
            allComments = comments;
            if (comments.length > 0) {
                $.each(comments, function (i, comment) {
                    var commentDate = new Date();
                    commentDate.setTime(comment.commentDate);
                    $('#comments').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + comment.comment + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span> by: ' + comment.faculty.name + ' ' + comment.faculty.surname + '</span></h5>\n\
        <h5 style="margin-left: 5px;"><i class="bx bxs-calendar"></i><span>' + commentDate + '</span></h5>\n\
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
            } else {
                $('#comments').append("<h1>You hava no comment right now</h1>");
            }
        },
        error: function () {
            alert("No comments found, try reloading the page");
        }
    });
});