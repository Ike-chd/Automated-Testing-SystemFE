$(document).ready(function () {
    $('#blockOrSuspendForm').submit(function (event) {
        event.preventDefault();
        
        var studentName = $('#studentName').val();
        var action = $('#action').val();
        var duration = $('#duration').val();
        var reason = $('#reason').val();

        if (!studentName.trim() || !reason.trim()) {
            alert('Student Name and Reason are required!');
            return;
        }

        var data = {
            studentName: studentName,
            action: action,
            duration: duration,
            reason: reason
        };

        $.ajax({
            url: 'http://localhost:8080/resources/block-suspend-endpoint', 
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                console.log('Successfully submitted form:', response);
                alert('Action completed successfully!');
            },
            error: function (error) {
                console.error('Error submitting form:', error);
                alert('Error completing action. Please try again.');
            }
        });
    });
});
