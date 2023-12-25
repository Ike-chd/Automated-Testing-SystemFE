var ip = "192.168.8.163";

$(function () {
    sessionStorage.setItem('cid', $('#courseId').html());
    sessionStorage.setItem('ip', "192.168.8.163");
    sessionStorage.setItem('userID', $('#ID').html());

    $('#profile').click(function () {
        $("#slideMenu").slideToggle(500);
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/numberOfStudents",
        success: function (numOfStudents) {
            document.getElementById('numOfStudents').innerHTML = "Total: " + numOfStudents + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/numberOfFacM",
        success: function (numOfFacM) {
            document.getElementById('numOfFacM').innerHTML = "Total: " + numOfFacM + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/numberOfAdmins",
        success: function (numOfAdmins) {
            document.getElementById('numOfAdmins').innerHTML = "Total: " + numOfAdmins + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/numberOfModules",
        success: function (numOfModules) {
            document.getElementById('numOfModules').innerHTML = "Total: " + numOfModules + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/tests/numberOfTests",
        success: function (numOfTests) {
            document.getElementById('numOfTests').innerHTML = "Total: " + numOfTests + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/numberOfCourses",
        success: function (numOfCourses) {
            document.getElementById('numOfCourses').innerHTML = "Total: " + numOfCourses + "";
        }
    });

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/topics/numberOfTopics",
        success: function (numOfTopics) {
            document.getElementById('numOfTopics').innerHTML = "Total: " + numOfTopics + "";
        }
    });
    
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/suspension-requests/getNumOfUnApprovedSuspensionRequests",
        success: function (numOfSus) {
            document.getElementById('numOfSus').innerHTML = "Total: " + numOfSus + "";
        }
    });
    
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/reports/courseAVG/"+sessionStorage.getItem('cid')+"/"+sessionStorage.getItem('userID'),
        success: function (courseAVG) {
            document.getElementById('courseAVG').innerHTML = "Aggregate: " + courseAVG + "";
        }
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

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
    series: [
        {
            data: [5, 5, 5, 5, 5]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        }
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%'
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ['Zulu', 'English', 'Math', 'Geo', 'History']
    },
    yaxis: {
        title: {
            text: 'Count'
        }
    }
};

const barChart = new ApexCharts(
        document.querySelector('#bar-chart'),
        barChartOptions
        );
barChart.render();

// AREA CHART
const areaChartOptions = {
    series: [
        {
            name: 'Purchase Orders',
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders'
            }
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders'
            }
        }
    ],
    tooltip: {
        shared: true,
        intersect: false
    }
};

const areaChart = new ApexCharts(
        document.querySelector('#area-chart'),
        areaChartOptions
        );
areaChart.render();
