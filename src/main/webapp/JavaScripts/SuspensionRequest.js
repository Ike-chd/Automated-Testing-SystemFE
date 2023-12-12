$(document).ready(function () {
    var input;
    var students;
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    
    $('.dropdown-menu li').click(function () {
        input = $(this).parents('.dropdown').find('input').val(),
                msg = '<span id="input" class="msg">';
        $('.msg').html(msg + input + '</span>');
    });
    
    $.ajax({
        type: 'GET',
        url: "http://192.168.80.170:8080/Automated-Testing-SystemBE/resources/students/allStudents",
        success: function (allStudents) {
            students = allStudents;
            $.each(students, function (i, student) {
                $('#dropdown-menu').append('<li id=' + i + '>' + student.name + ' ' + student.surname + '</li>');
            });
        }
    });
    
    $('#blockOrSuspendForm').submit(function (event) {
        event.preventDefault();
        
//        var $student = students[input.innerHTML];
        
        var data = {
            student: $('#input').html(),
            reason: $('#reason').html(),
            requestedBy: {
                email: localStorage.getItem('email')
            },
            start: $('#start').val(),
            end: $('#end').val(),
            active: false
        };
        
        $.ajax({
            url: 'http://localhost:8080/resources/suspension-requests/createSuspensionRequest',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                console.log('Successfully submitted form:', response);
                alert('Action completed successfully!');
            }
//            error: function (error) {
//                console.error('Error submitting form:', error);
//                alert('Error completing action. Please try again.');
//            }
        });
    });
});
