var allTopics;
var courseId;
var Topics;
var Topic;
var ip = "192.168.8.131";

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (topics) {
            console.log(topics);
            allTopics = topics;
            $.each(topics, function (i, topic) {
                $('#alltopics').append('\
<a id="c' + i + '" class="topics" href="updateTopic.html">\n\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + topic.topicName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + topic.infoLink + '</span>\n\
        </h5><h5 style="display: block; margin-left: 30px;"><i class="fa fa-list" aria-hidden="true" style="margin-right: 5px;"></i><span class="time">' + topic.description + '</span></h5>\n\
    </div>\n\
</a>');
            });
            Topics = document.getElementsByClassName('topics');
            for (var i = 0; i < Topics.length; i++) {
                Topics[i].addEventListener('click', function () {
                    localStorage.setItem("currentTopic", JSON.stringify(allTopics[parseInt(this.id[1])]));
                });
            }
        }
    });
});