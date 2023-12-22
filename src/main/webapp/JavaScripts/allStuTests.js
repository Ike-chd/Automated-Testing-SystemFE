var tests = document.getElementsByClassName('tests');
var ip = "192.168.8.113";
var alltests;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/getAllMyTests/" + sessionStorage.getItem('id'),
        success: function (tests) {
            allTests = tests;
            $.each(tests, function (i, test) {
                console.log(tests);
                $('#allTests').append('\
<a class="tests" href="takeTest">\n\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + test.testName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + test.module.moduleName + '</span></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><span id="totalMarks"></span><i class="bx bx-check-double"></i></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-time-five"></i><span class="time">' + Math.floor(test.duration / 3600) + ':' + (test.duration % 3600) / 60 + '</span></h5><h5></h5>\n\
    </div>\n\
</a>');
                $.ajax({
                    type: 'GET',
                    url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/getAllMyTests/" + sessionStorage.getItem('id'),
                    success: function (tests) {
                        
                    },
                    error: function () {
                        alert("Tests Not found, Please try to reload the page");
                    }
                });
            });
        },
        error: function () {
            alert("Tests Not found, Please try to reload the page");
        }
    });
});

for (var i = 0; i < tests.length; i++) {
    tests[i].addEventListener('click', function () {
        localStorage.setItem("currentTest", JSON.stringify(alltests[parseInt(this.id[1] - 1)]));
        console.log(localStorage.getItem("currentTest"));
        localStorage.removeItem("currentTime");
        if (localStorage.getItem(alltests[parseInt(this.id[1] - 1)].testName) === null) {
            var time = this.querySelector('.time').innerHTML.split(":");
            var date = new Date();
            date.setHours(date.getHours() + parseInt(time[0]));
            date.setMinutes(date.getMinutes() + parseInt(time[1]));
            localStorage.setItem(alltests[parseInt(this.id[1] - 1)].testName, date);
        }
    });
}