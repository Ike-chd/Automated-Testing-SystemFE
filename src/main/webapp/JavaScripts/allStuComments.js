var allComments;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        tyep: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments/allComments/byStudent/",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (comments) {
            allComments = comments;
            $.each(comments, function (i, comment) {
                $('#allComments').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + comment.comment + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span> by: ' + comment.faculty.name + ' ' + comment.faculty.surname + '</span></h5>\n\
        <h5 style="margin-left: 5px;"><i class="bx bxs-calendar"></i><span>' + new Date().setTime(parseInt(comment.commentDate)) + '</span></h5>\n\
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
                sessionStorage.setItem('mod', JSON.stringify(allModules[i]));
                window.location.href = 'updateModule.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Comment | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/deleteModule/" + allModules[i].moduleID,
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