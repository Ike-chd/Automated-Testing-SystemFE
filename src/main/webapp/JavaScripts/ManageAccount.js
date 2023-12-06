$(document).ready(function () {
    // Fetch and display the list of accounts
    fetchAccountList();

    // Event handler for the "Submit Action" button
    $('#submitActionBtn').click(function () {
        submitAction();
    });

    // Event handler for selecting an account
    $('#accountList').on('click', '.account-item', function () {
        var accountId = $(this).data('account-id');
        // Fetch and display details for the selected account
        fetchAccountDetails(accountId);
    });
});

// Function to fetch and display the list of accounts
function fetchAccountList() {
    $.ajax({
        url: 'http://localhost:8080/resources/accounts/getAllAccounts', // Update with your API endpoint
        method: 'GET',
        success: function (data) {
            // Update the '#accountList' element with the fetched data
            renderAccountList(data);
        },
        error: function (error) {
            console.error('Error fetching account list:', error);
        }
    });
}

// Function to render the list of accounts
function renderAccountList(accounts) {
    var accountList = $('#accountList');
    accountList.empty();

    $.each(accounts, function (index, account) {
        var listItem = $('<li class="account-item" data-account-id="' + account.id + '">' + account.username + '</li>');
        accountList.append(listItem);
    });
}

// Function to fetch and display details for a specific account
function fetchAccountDetails(accountId) {
    $.ajax({
        url: 'http://localhost:8080/resources/accounts/getAccount/' + accountId, // Update with your API endpoint
        method: 'GET',
        success: function (account) {
            // Update UI with account details
            displayAccountDetails(account);
        },
        error: function (error) {
            console.error('Error fetching account details:', error);
        }
    });
}

// Function to display account details in the UI
function displayAccountDetails(account) {
    $('#accountId').val(account.id);
    $('#accountUsername').text(account.username);
    $('#accountEmail').text(account.email);
    // Add more details as needed
}

// Function to submit approval or rejection action
function submitAction() {
    var accountId = $('#accountId').val();
    var action = $('#action').val();

    $.ajax({
        url: 'http://localhost:8080/resources/accounts/processAction', // Update with your API endpoint
        method: 'POST',
        data: { accountId: accountId, action: action },
        success: function (response) {
            console.log('Action submitted successfully:', response);
            // Update the account list after processing the action
            fetchAccountList();
            // Clear details in the UI
            clearAccountDetails();
        },
        error: function (error) {
            console.error('Error submitting action:', error);
        }
    });
}

// Function to clear account details in the UI
function clearAccountDetails() {
    $('#accountId').val('');
    $('#accountUsername').text('');
    $('#accountEmail').text('');
    // Clear more details as needed
}

