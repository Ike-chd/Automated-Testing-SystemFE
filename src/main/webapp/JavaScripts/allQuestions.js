var allQuestions;
var ip = "192.168.8.113";
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/questions/allQuestions/"+sessionStorage.getItem('tid'),
        success: function (questions) {
            allQuestions = questions;
            $.each(questions, function (i, question) {
                $('#alltopics').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + question.text + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + question.markAllocation + 'Marks</span></h5>\n\
        <div style="margin-top: 7px;" id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">View All Answers</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
        </div>\n\
    </div>');
            });
            
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Update') {
                        update(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'View All Answers') {
                        viewAll(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Delete') {
                        Delete(parseInt(this.classList[1]));
                    }
                });
            }

            function update(i) {
                sessionStorage.setItem('que', JSON.stringify(allTopics[i]));
                window.location.href = 'updateQuestion.html';
            }

            function viewAll(i) {
                sessionStorage.setItem('qid', i);
                window.location.href = 'allAnswers.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Question | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/questions/deleteQuestion/" + allQuestions[i].questionID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Question successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Question Not deleted successfully");
                            }
                        }
                    });
                }
            }
        }
    });
});