var allSusp;
var conbtns = document.getElementsByClassName("con");

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Joint.Backend/resources/suspension-request/getUnApprovedSuspensionRequests",
        success: function (suspensions) {
            allSusp = suspensions;
            $.each(suspensions, function (i, sus) {
                $('#suspensions').append('\
    <div class="wrapper">\n\
        <div class="studentInfo">\n\
            <h1>' + sus.student.name + ' ' + sus.student.surname + '</h1>\n\
            <h2>Requested By: ' + sus.creator.name + ' ' + sus.creator.surname + ' ' + sus.creator.email + '</h2>\n\
            <h5>' + sus.reason + '</h5>\n\
            <div class="btns"><button class="btn ' + i + '">Confirm</button><button class="btn ' + i + '">Reject</button></div></div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Confirm') {
                        confirm(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Reject') {
                        reject(parseInt(this.classList[1]));
                    }
                });
            }

            function confirm(i) {
                allSusp[i].confirmedBy = {email: sessionStorage.getItem('email')};
                allSusp[i].active = true;
                $.ajax({
                    url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/updatesrq',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(allSusp[i]),
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
                    url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/updatesrq',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(allSusp[i]),
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