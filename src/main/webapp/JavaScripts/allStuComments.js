var allComments;
var ip;

$(function () {
    $.ajax({
        tyep: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/comments/allComments",
        headers: {
            'content-type': 'application/json'
        },
        success: function(comments){
            allComments = comments;
            $.each(comments, function(i, comment) {
                $('#allComments').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + comment.comment + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span> by: ' + comment.faculty.name +' '+ comment.faculty.surname +'</span></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-calendar"></i><span>'+ new Date().setTime(comment.commentDate) +'</span></h5>\n\
        <div id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
            <button class="btn ' + i + '">View All Topics</button>\n\
        </div>\n\
    </div>');
            });
        },
        error: function(){
            alert("No comments found, try reloading the page");
        }
    });
});