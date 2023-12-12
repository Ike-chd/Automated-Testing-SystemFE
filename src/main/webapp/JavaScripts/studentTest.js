// studentTest.js

// Function to fetch modules
function fetchModules() {
    $.ajax({
        url: 'http://localhost:8080/resources/modules',
        method: 'GET',
        dataType: 'json',
        success: function (modules) {
            // Handle the modules data
            displayModules(modules);
        },
        error: function (error) {
            console.error('Error fetching modules:', error);
        }
    });
}

// Function to display modules
function displayModules(modules) {
    const upcomingTestsContainer = document.getElementById('upcomingTests');

    // Iterate through modules and display relevant information
    modules.forEach(module => {
        // You should replace these placeholders with actual data from your database response
        const moduleName = module.name || 'Module Name';
        const testDetails = module.tests ? module.tests.join(', ') : 'No upcoming tests';

        const moduleCard = document.createElement('div');
        moduleCard.className = 'card';

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const moduleTitle = document.createElement('p');
        moduleTitle.className = 'text-primary';
        moduleTitle.textContent = moduleName;

        const moduleIcon = document.createElement('span');
        moduleIcon.className = 'material-icons-outlined text-blue';
        moduleIcon.textContent = 'event_note';

        cardInner.appendChild(moduleTitle);
        cardInner.appendChild(moduleIcon);

        moduleCard.appendChild(cardInner);

        const moduleDetails = document.createElement('span');
        moduleDetails.className = 'text-primary font-weight-bold';
        moduleDetails.textContent = `Details: ${testDetails}`;

        moduleCard.appendChild(moduleDetails);

        // Add the module card to the container
        upcomingTestsContainer.appendChild(moduleCard);
    });
}

// Function to fetch tests
function fetchTests() {
    $.ajax({
        url: 'http://localhost:8080/resources/tests',
        method: 'GET',
        dataType: 'json',
        success: function (tests) {
            // Handle the tests data
            displayTests(tests);
        },
        error: function (error) {
            console.error('Error fetching tests:', error);
        }
    });
}

// Function to display tests
function displayTests(tests) {
    // You can implement the logic to display ongoing and completed tests here
}

// Fetch modules and tests on page load
window.onload = function () {
    fetchModules();
    fetchTests();
};
