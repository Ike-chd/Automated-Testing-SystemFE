// Sidebar Toggle
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-responsive', sidebarOpen);
  sidebarOpen = !sidebarOpen;
}

// Charts
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#E8EAE3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Math', 'History', 'Physics', 'Biology', 'Chemistry'],
  },
  yaxis: {
    title: {
      text: 'Average Grade',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

const areaChartOptions = {
  series: [
    {
      name: 'Test Scores',
      data: [75, 92, 84, 67, 88, 95, 78],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#373833'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Test Scores',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Tiles and Buttons
const fetchDataButton = document.getElementById('fetch-data-button');
const loadingIndicator = document.getElementById('loading-indicator');

// Function to update tile content based on student data
function updateTiles(data) {
  const tileContents = [
    `Total Students: ${data.totalStudents}`,
    `Average Test Score: ${data.averageTestScore.toFixed(2)}`,
    // Add more tile contents as needed...
  ];

  const tiles = document.querySelectorAll('.card');
  tiles.forEach((tile, index) => {
    tile.innerHTML = `
      <div class="card-inner">
        <p class="text-primary">${tileContents[index]}</p>
        <span class="material-icons-outlined text-blue">info</span>
      </div>
    `;
  });
}

// Function to fetch student data
async function fetchStudentData() {
  try {
    loadingIndicator.style.display = 'block';
    // Replace '/api/student-data' with your actual API endpoint
    const response = await fetch('/api/student-data');
    const data = await response.json();
    updateTiles(data);
    barChart.updateSeries([{ data: data.barChartData }]);
    areaChart.updateSeries([{ data: data.areaChartData }]);
  } catch (error) {
    console.error('Error fetching student data:', error);
  } finally {
    loadingIndicator.style.display = 'none';
  }
}

// Event Listener
fetchDataButton.addEventListener('click', fetchStudentData);

// Initial fetch on page load
fetchStudentData();
