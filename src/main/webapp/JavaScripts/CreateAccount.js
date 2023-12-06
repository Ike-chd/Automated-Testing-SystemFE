$(document).ready(function () {
    $('#createAccountForm').submit(function (event) {
        event.preventDefault();

        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var role = $('#role').val();

        var accountData = {
            username: username,
            email: email,
            password: password,
            role: role
        };

        var apiUrl = 'http://your-api-endpoint/createAccount';

        $.ajax({
            url: apiUrl,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(accountData),
            success: function (response) {
                console.log('Account created successfully:', response);
                alert('Account created successfully!');
            },
            error: function (error) {
                console.error('Error creating account:', error);
                alert('Error creating account. Please try again.');
            }
        });
    });
});
