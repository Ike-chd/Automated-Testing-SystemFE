///* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
// */
//$(function () {
//    $('#profile').click(function () {
//        $("#slideMenu").slideToggle(500);
//    });
//});
//
//// SIDEBAR TOGGLE
//
//let sidebarOpen = false;
//const sidebar = document.getElementById('sidebar');
//
//function openSidebar() {
//    if (!sidebarOpen) {
//        sidebar.classList.add('sidebar-responsive');
//        sidebarOpen = true;
//    }
//}
//
//const barChartOptions = {
//    series: [
//        {
//            data: [10, 8, 6, 4, 2],
//        },
//    ],
//    chart: {
//        type: 'bar',
//        height: 350,
//        toolbar: {
//            show: false,
//        },
//    },
//    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
//    plotOptions: {
//        bar: {
//            distributed: true,
//            borderRadius: 4,
//            horizontal: false,
//            columnWidth: '40%',
//        },
//    },
//function closeSidebar() {
//    if (sidebarOpen) {
//        sidebar.classList.remove('sidebar-responsive');
//        sidebarOpen = false;
//    }
//}
//
//// ---------- CHARTS ----------
//
//// BAR CHART
//    },
//    },
//    xaxis: {
//        categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
//    },
//    yaxis: {
//        title: {
//            text: 'Count',
//        },
//    },
//};
//
//const barChart = new ApexCharts(
//        document.querySelector('#bar-chart'),
//        barChartOptions
//        );
//barChart.render();
//
//const areaChartOptions = {
//    dataLabels: {
//        enabled: false,
//    },
//    stroke: {
//        curve: 'smooth',
//    },
//    },
//};
//
//const areaChart = new ApexCharts(
//        document.querySelector('#area-chart'),
//        areaChartOptions
//        );
//areaChart.render();
//
//// Tiles and Buttons
//const fetchDataButton = document.getElementById('fetch-data-button');
//const loadingIndicator = document.getElementById('loading-indicator');
//
//// Function to update tile content based on student data
//function updateTiles(data) {
//  const tileContents = [
//    `Total Students: ${data.totalStudents}`,
//    `Average Test Score: ${data.averageTestScore.toFixed(2)}`,
//    // Add more tile contents as needed...
//  ];
//
//  const tiles = document.querySelectorAll('.card');
//  tiles.forEach((tile, index) => {
//    tile.innerHTML = `
//      <div class="card-inner">
//        <p class="text-primary">${tileContents[index]}</p>
//        <span class="material-icons-outlined text-blue">info</span>
//      </div>
//    `;
//  });
//}
//
//// Function to fetch student data
//async function fetchStudentData() {
//  try {
//    loadingIndicator.style.display = 'block';
//    // Replace '/api/student-data' with your actual API endpoint
//    const response = await fetch('/api/student-data');
//    const data = await response.json();
//    updateTiles(data);
//    barChart.updateSeries([{ data: data.barChartData }]);
//    areaChart.updateSeries([{ data: data.areaChartData }]);
//  } catch (error) {
//    console.error('Error fetching student data:', error);
//  } finally {
//    loadingIndicator.style.display = 'none';
//  }
//}
//
//// Event Listener
//fetchDataButton.addEventListener('click', fetchStudentData);
//
//// Initial fetch on page load
//fetchStudentData();
