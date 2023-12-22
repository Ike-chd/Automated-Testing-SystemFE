
$(function () {
    $('#profile').click(function () {
        $("#slideMenu").slideToggle(500);
    });
    
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/students/numberOfStudents",
        success: function (numOfStudents) {
            document.getElementById('numOfStudents').innerHTML = "Total: "+numOfStudents+"";
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
