var tests = document.getElementsByClassName('tests');
var ip = sessionStorage.getItem('ip');
var alltests;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/getAllTests/byModule/" + parseInt(sessionStorage.getItem('mid')),
        success: function (tests) {
            allTests = tests;
            $.each(tests, function (i, test) {
                $('#allTests').append('\
    <div class="wrapper">\n\
        <h1 style="display: inline">' + test.testName + '</h1>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + test.module.moduleName + '</span></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-check-double"></i><span></span></h5>\n\
        <h5 style="display: inline; margin-left: 30px;"><i class="bx bxs-time-five"></i><span class="time">' + Math.floor(test.duration / 3600) + ':' + (test.duration % 3600) / 60 + '</span></h5><h5></h5>\n\
        <div id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
            <button class="btn ' + i + '">View All Topics</button>\n\
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
                sessionStorage.setItem('test', JSON.stringify(allTests[i]));
                window.location.href = 'updateTest.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Test | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/deleteTest/" + allTests[i].testID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Tests successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Tests Not deleted successfully");
                            }
                        }
                    });
                }
            }
        },
        error: function () {
            console.log("Not found");
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