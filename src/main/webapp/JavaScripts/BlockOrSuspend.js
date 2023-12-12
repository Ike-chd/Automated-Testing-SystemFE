var allSusp;
var conbtns = document.getElementsByClassName("con");
var wrapper =
        <div class="wrapper">
            <div class="studentInfo">
                <h1>
                    Ike
                </h1>
                <h5><i class='bx bx-check-double'></i><span>80 marks</span></h5>
                <h5><i class='bx bxs-time-five'></i><span class="time">2:30</span></h5>
            </div>
            <div class="btns">
                <button id='' class='con'>Confirm</button>
                <button class='rej'>Reject</button>
            </div>
        </div>;

for (var i = 0; i < conbtns.length; i++) {
    conbtns[i].addEventListener('click', function () {

    });
}

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

$(function () {
    $('#profile').click(function () {
        $("#slideMenu").slideToggle(500);
    });
});

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/allCourses",
        success: function (suspensions) {
            allSusp = suspensions;
            $.each(suspensions, function (i, sus) {
                topicName = sus.courseName;
                courseId = i;
                $('#allcourses').append(courseHTML);
            });
        }
    });
    
    var arr = [1, 2];
    
    for (var i = 0; i < arr.length; i++) {
        
    }
});