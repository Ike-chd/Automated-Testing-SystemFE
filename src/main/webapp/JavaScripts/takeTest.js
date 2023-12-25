var numOfQuestions = 0;
var q = 0;
var test = JSON.parse(sessionStorage.getItem("currentTest"));
var ip = sessionStorage.getItem('ip');
var student = parseInt(sessionStorage.getItem("userID"));
var start;
var end;

$(function () {
    start = new Date();
    makePage(test);

    var countDownDate = new Date(sessionStorage.getItem(JSON.parse(sessionStorage.getItem("currentTest")).testName)).getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timel").innerHTML = "Time Left : " + hours + ":"
                + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("close").style.display = "none";
            $("#fl1").slideDown(1500);
            sessionStorage.removeItem(JSON.parse(sessionStorage.getItem("currentTest")).testName);
        }
    }, 1000);

    function makePage(gotTest) {
        test = gotTest;
        var questions = test.questions;
        $.each(questions, function (i, question) {
            numOfQuestions = numOfQuestions + 1;
            $('#body').append('<div class="questions" id="que' + i + '"><h1 id="ques' + i + '">' + question.question + '</h1>');
            $('#que' + i).append('<div class="wrapper" id="q' + i + '"></div></div>');
            var answers = question.answers;
            $.each(answers, function (j, answer) {
                var tf = answer.isCorrect ? "true" : "false";
                $('#q' + i).append('<div class="que' + i + '"><label class="container" id="a' + j + '">\n\
                                        <input class="answers ' + i + '" type="checkbox" value="' + tf + '"><span class="checkmark"></span></label>\n\
                                        <h3>' + answer.answer + '</h3><br></div>');
            });
        });
    }

    $('#prev').click(function () {
        if (q > 0) {
            $("#que" + q).animate({'margin-left': '100%'});
            $("#que" + q).fadeOut(0);
            q--;
            $("#que" + q).fadeIn(0);
            $("#que" + q).animate({'margin-right': '0'});
        }
    });

    $('#next').click(function () {
        if (q < numOfQuestions - 1) {
            $("#que" + q).animate({'margin-right': '100%'});
            $("#que" + q).fadeOut(0);
            q++;
            $('#que' + q).fadeIn(100);
            $("#que" + q).animate({'margin-left': '0'});
        }
    });

    $("#finish").click(function () {
        $("#fl1").slideDown(1000);
    });

    $('#submit').click(function () {
        sessionStorage.removeItem(JSON.parse(sessionStorage.getItem("currentTest")).testName);
        sessionStorage.removeItem("currentTest");
        end = new Date();
        var que = 0;
        var answers = $('.answers').map(function () {
            que++;
            if (this.checked === true) {
                return {
                    student: {
                        userID: student
                    },
                    question: test.questions[parseInt(this.classList[1])],
                    test: test,
                    correctAns: this.value === "true"
                };
            }
        }).get();
        var testAttempt = {
            test: test,
            student: {
                userID: student
            },
            rating: $('#rating').val(),
            answers: answers,
            startTime: start.getTime(),
            endTime: end.getTime()
        };

        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/test-attempts/createTestAttempt",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(testAttempt),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Test successfully taken...");
                    window.history.go(-2);
                } else {
                    alert("There has been some issues with submiting the test...");
                }
            }
        };
        console.log(testAttempt);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});