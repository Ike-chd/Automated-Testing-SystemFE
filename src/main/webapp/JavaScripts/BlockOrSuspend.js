var allSusp;
var conbtns = document.getElementsByClassName("con");
var ip = "192.168.8.163";

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/suspension-requests/getUnApprovedSuspensionRequests",
        success: function (suspensions) {
            allSusp = suspensions;
            $.each(suspensions, function (i, sus) {
                var start = new Date();
                start.setTime(sus.start);
                var end = new Date();
                end.setTime(sus.start + sus.duration);
                $('#allRequests').append('\
    <div class="wrapper">\n\
        <div class="studentInfo">\n\
            <h1>' + sus.student.name + ' ' + sus.student.surname + '</h1>\n\
            <h2>Requested By: ' + sus.requestedBy.name + ' ' + sus.requestedBy.surname + '<i class="bx bx-envelope" style="margin-right: 5px;"></i>' + sus.requestedBy.email + '</h2>\n\
            <h5>Reason: ' + sus.reason + '</h5>\n\
            <h5>From: ' + start + '</h5>\n\
            <h5>To: ' + end + '</h5>\n\
            <div class="btns"><button class="con btn ' + i + '">Confirm</button><button class="rej btn ' + i + '">Reject</button></div></div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Confirm') {
                        confirm(parseInt(this.classList[2]));
                    } else if (this.innerHTML === 'Reject') {
                        reject(parseInt(this.classList[2]));
                    }
                });
            }

            function confirm(i) {
                allSusp[i].confirmedBy = {userID: sessionStorage.getItem('userID')};
                allSusp[i].active = true;
                $.ajax({
                    url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/updatesrq/' + allSusp[i].ssId + '/' + sessionStorage.getItem("userID") + '/' + 1,
                    method: 'POST',
                    contentType: 'application/json',
                    complete: function (response) {
                        if (response.status >= 200 && response.status <= 299) {
                            alert("Requst successfully confirmed...");
                            window.history.go(-1);
                        }
                    }
                });
                window.location.go(-1);
            }

            function reject(i) {
                allSusp[i].confirmedBy = {email: sessionStorage.getItem('email')};
                allSusp[i].active = false;
                $.ajax({
                    url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/updatesrq/' + allSusp[i].ssId + '/' + sessionStorage.getItem("userID") + '/' + 0,
                    method: 'POST',
                    contentType: 'application/json',
                    complete: function (response) {
                        if (response.status >= 200 && response.status <= 299) {
                            alert("Requst successfully rejected...");
                            window.history.go(-1);
                        }
                    }
                });
                window.location.go(-1);
            }
        }
    });
});