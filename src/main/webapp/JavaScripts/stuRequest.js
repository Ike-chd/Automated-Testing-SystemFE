var ip = sessionStorage.getItem('ip');
var input;
var students;
var startDate;
var endDate;

$(document).ready(function () {
    $('#name').html(JSON.parse(sessionStorage.getItem('stu'))+' '+JSON.parse(sessionStorage.getItem('stu')));

    $('#submit').click(function () {
        startDate = new Date($('#start').val());
        endDate = new Date($('#end').val());
        if (endDate.getTime() > startDate.getTime()) {
            var data = {
                student: JSON.parse(sessionStorage.getItem('stu')),
                reason: $('#reason').html(),
                requestedBy: JSON.parse(sessionStorage.getItem('loggedIn')),
                start: startDate.getTime(),
                duration: endDate.getTime() - startDate.getTime(),
                active: false
            };

            console.log(data);

            $.ajax({
                url: 'http://' + ip + ':8080/Automated-Testing-SystemBE/resources/suspension-requests/admitsrq',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                complete: function (response) {
                    if (response.status >= 200 && response.status <= 299) {
                        alert("Requst successfully admitted...");
                        window.history.go(-1);
                    }
                }
            });
        } else {
            alert('Start date must not be before today and end date must greater that start date...');
        }
    });
});
