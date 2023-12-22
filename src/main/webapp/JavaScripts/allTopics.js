var allTopics;
var ip = "192.168.8.113";
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (topics) {
            console.log(topics);
            allTopics = topics;
            $.each(topics, function (i, topic) {
                $('#alltopics').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + topic.topicName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + topic.infoLink + '</span>\n\
        </h5><h5 style="display: block; margin-left: 30px;"><i class="fa fa-list" aria-hidden="true" style="margin-right: 5px;"></i><span class="time">' + topic.description + '</span></h5>\n\
        <div style="margin-top: 7px;" id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">View All Questiions</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
        </div>\n\
    </div>');
            });
            
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Update') {
                        update(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'View All Questions') {
                        viewAll(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Delete') {
                        Delete(parseInt(this.classList[1]));
                    }
                });
            }

            function update(i) {
                sessionStorage.setItem('top', JSON.stringify(allTopics[i]));
                window.location.href = 'updateTopic.html';
            }

            function viewAll(i) {
                sessionStorage.setItem('tid', i);
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Topic | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/deleteTopic/" + allModules[i].moduleID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Topics successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Topics Not deleted successfully");
                            }
                        }
                    });
                }
            }
        }
    });
});