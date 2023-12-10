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
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
            msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});

$(function () {
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });
    var $moduleName = $('#module-name');
    var $moduleDescription = $('#module-description');
    var $numTests = $('#num-tests');

    $('#submit').click(function (event) {
        event.preventDefault();
        var module = {
            moduleName: $moduleName.val(),
            moduleDescription: $moduleDescription.val(),
            numTests: $numTests.val()
        };
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/modules/create",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(module)
        };
        console.log(module);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});