var allAnswers;
var ip = "192.168.8.113";
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/answers/getAnswers/"+sessionStorage.getItem('qid'),
        success: function (answers) {
            allAnswers = answers;
            $.each(answers, function (i, answer) {
                $('#alltopics').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + answer.text + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;">'+ (answer.isCorrect ? '<i class="bx bx-link-alt" style="margin-right: 5px;"></i>' : '<i class="bx bx-link-alt" style="margin-right: 5px;"></i>') +'</h5>\n\
        <div style="margin-top: 7px;" id="f1" class="btnflex">\n\
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
                sessionStorage.setItem('ans', JSON.stringify(allTopics[i]));
                window.location.href = 'updateAnswer.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Answer | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/answers/deleteAnswer/" + allAnswers[i].answerID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Answer successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Answer Not deleted successfully");
                            }
                        }
                    });
                }
            }
        }
    });
});