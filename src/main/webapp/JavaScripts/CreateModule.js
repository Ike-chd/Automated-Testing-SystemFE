var module;
var moduleId;
var modules;
var allModules;
var ip = sessionStorage.getItem('ip');
var numOfModules = 0;
var sendingModules;

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
    var $moduleName = $('#module');
    var $moduleDescription = $('#desc');

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/allModules",
        success: function (Modules) {
            allModules = Modules;
            $.each(Modules, function (i, module) {
                moduleId = i;
                $('#allModules').append('\
<label class="container">' + module.moduleName + '\
    <input class="modules" id="' + i + '" type="checkbox" name="category" value="' + moduleId + '">\n\
    <span class="checkmark"></span>\n\
</label>');
            });
        }
    });

    modules = document.getElementsByClassName('modules');
    var closebtn = document.getElementsByClassName('close');

    closebtn[0].addEventListener('click', function () {
        sendingModules = $('.modules').map(function () {
            if (this.checked) {
                return allModules[parseInt(this.id)];
            }
        }).get();
    });

    $('#add').click(function () {
        sendingModules = [];
    });

    $('#submit').click(function () {
        var module = {
            moduleName: $moduleName.val(),
            moduleDescription: $moduleDescription.html(),
            modules: sendingModules
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/postModule",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(module),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Module successfully created...");
                    window.history.go(-1);
                }
            }
        };
        console.log(module);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});