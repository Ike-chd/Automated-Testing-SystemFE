$(document).ready(function () {
    // Function to search students based on name
    function searchStudents() {
        var studentName = $('#studentName').val();

        // Make an AJAX call to fetch search results based on studentName
        $.ajax({
            url: 'http://localhost:8080/resources/students/search?name=' + studentName,
            method: 'GET',
            contentType: 'application/json',
            success: function (response) {
                // Populate the dropdown with search results
                var dropdown = $('#studentDropdown');
                dropdown.empty();

                if (response.length > 0) {
                    dropdown.append($('<option>').text('Select a Student').attr('disabled', 'disabled').attr('selected', 'selected'));
                    $.each(response, function (index, student) {
                        dropdown.append($('<option>').text(student.firstname + ' ' + student.surname).val(student.studentID));
                    });
                    dropdown.show();
                } else {
                    dropdown.hide();
                }
            },
            error: function (error) {
                console.error('Error searching students:', error);
            }
        });
    }

    // Function to submit suspension request
    function submitSuspensionRequest() {
        var selectedStudent = $('#studentDropdown').val();
        var duration = $('#duration').val();
        var reason = $('#reason').val();

        // Validate selected student and other inputs
        if (selectedStudent === 'Select a Student') {
            alert('Please select a valid student.');
            return;
        }

        if (!duration || duration <= 0) {
            alert('Please enter a valid suspension duration.');
            return;
        }

        if (!reason.trim()) {
            alert('Please provide a reason for suspension.');
            return;
        }

        // Create an object with the suspension request details
        var suspensionRequest = {
            studentID: selectedStudent,
            duration: duration,
            reason: reason
            // Add more fields if needed
        };

        // Make an AJAX call to submit the suspension request
        $.ajax({
            url: 'http://localhost:8080/resources/suspensionRequests/submitRequest',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(suspensionRequest),
            success: function (response) {
                console.log('Successfully submitted suspension request:', response);
                alert('Suspension request submitted successfully!');
            },
            error: function (error) {
                console.error('Error submitting suspension request:', error);
                alert('Error submitting suspension request. Please try again.');
            }
        });
    }

    // Attach event listeners
    $('#studentName').on('input', searchStudents);
    $('#submitRequest').click(submitSuspensionRequest);
});
