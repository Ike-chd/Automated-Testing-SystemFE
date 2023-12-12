var numOfQuestions = 0;
var q = 0;

$(function () {
    makePage(JSON.parse(localStorage.getItem("currentTest")));
    var test = {test: "greetings"};
    var student = {name: "Ike"};
    var ip="localhost";

    var countDownDate = new Date(localStorage.getItem(JSON.parse(localStorage.getItem("currentTest")).testName)).getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timel").innerHTML = "Time Left : " + hours + ":"
                + minutes + ":" + seconds;
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
                                        <input class="answers" type="checkbox" value="' + tf + '"><span class="checkmark"></span></label>\n\
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
        if (q < numOfQuestions-1) {
            $("#que" + q).animate({'margin-right': '100%'});
            $("#que" + q).fadeOut(0);
            q++;
            $('#que' + q).fadeIn(100);
            $("#que" + q).animate({'margin-left': '0'});
        }
    });

    $('#finish').click(function () {
        var que = 0;
        var answers = $('.answers').map(function () {
            que++;
            if (this.checked === true) {
                return {
                    student: student,
                    question: {
                        question: document.getElementById(this.parentElement.parentElement.classList[0]).children[0].innerHTML
                    },
                    correctAns: this.value === "true",
                    test: test
                };
            }
        }).get();
        var testAttempt = {
            test: test,
            student: student,
            rating: $('#rating').val(),
            answers: answers
        };

        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/create",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(testAttempt)
        };
        console.log(testAttempt);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});