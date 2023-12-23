var tests = document.getElementsByClassName('tests');
var ip = sessionStorage.getItem('ip');
var alltests;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/getAllMyTests/" + sessionStorage.getItem('id'),
        success: function (tests) {
            alltests = tests;
            $.each(tests, function (i, test) {
                console.log(tests);
                $('#allTests').append('\
<a id=' + i + ' class="tests" href="takeTest.html">\n\
    <div class="wrapper">\n\
        <h1 style="display: inline"><span style="display: none;">' + test.testID + '</span>' + test.testName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + test.module.moduleName + '</span></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><span id="totalMarks' + i + '"></span><i class="bx bx-check-double"></i></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-time-five"></i><span class="time">' + Math.floor(test.duration / 3600) + ':' + (test.duration % 3600) / 60 + '</span></h5><h5></h5>\n\
    </div>\n\
</a>');
                $.ajax({
                    type: 'GET',
                    url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/getTestTotal/" + test.testID,
                    success: function (mark) {
                        $('totalMarks' + i).append(mark);
                    },
                    error: function () {
                        $('totalMarks' + i).append(0);
                    }
                });
            });
            addClickEvents();
        },
        error: function () {
            alert("Tests Not found, Please try to reload the page");
        }
    });
});

function addClickEvents() {
    for (var i = 0; i < tests.length; i++) {
        tests[i].addEventListener('click', function () {
            sessionStorage.setItem("currentTest", JSON.stringify(alltests[parseInt(this.id)]));
            console.log(sessionStorage.getItem("currentTest"));
            if (sessionStorage.getItem(alltests[parseInt(this.id)].testName) === null) {
                var time = this.querySelector('.time').innerHTML.split(":");
                var date = new Date();
                date.setHours(date.getHours() + parseInt(time[0]));
                date.setMinutes(date.getMinutes() + parseInt(time[1]));
                sessionStorage.setItem(alltests[parseInt(this.id)].testName, date);
            }
        });
    }
}