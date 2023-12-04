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



