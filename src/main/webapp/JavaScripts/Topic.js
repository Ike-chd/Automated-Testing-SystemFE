$(document).ready(function () {
    $('.navbar a').click(function () {
        //TODO
        alert('Navigation item clicked!');
    });
    $('#submit').click(function (event) {
        event.preventDefault();
        var topicName = $('#topicName').val();
        var topicDescription = $('#topicDescription').val();
        var infoLink = $('#infoLink').val();

        if (!topicName.trim()) {
            alert('Topic Name is required!');
            return;
        }

        var data = {
            topicName: topicName,
            topicDescription: topicDescription,
            infoLink: infoLink
        };
        
        console.log(data);

        $.ajax({
            url: 'http://localhost:8080/resources/topics/postTopic',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                console.log('Successfully submitted form:', response);
                alert('Topic created successfully!');
            },
            error: function (error) {
                console.error('Error submitting form:', error);
                alert('Error creating topic. Please try again.');
            }
        });
    });
});
