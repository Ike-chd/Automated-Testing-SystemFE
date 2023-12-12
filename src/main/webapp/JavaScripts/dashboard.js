$(function () {
    $('#profile').click(function () {
        $("#slideMenu").slideToggle(500);
    });
});

// SIDEBAR TOGGLE

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

// Ongoing Test Card Click Event
document.getElementById('ongoingTestCard').addEventListener('click', function () {
    startTest();
});

function startTest() {
    console.log("Test started!");
}


   
