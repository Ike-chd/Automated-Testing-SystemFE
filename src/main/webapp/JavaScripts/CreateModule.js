var module;
var moduleId;
var moduleHTML;
var modules;
var allModules;
var ip;
var numOfModules = 0;
var sendingModules = [];

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

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/module/allModules",
        success: function (modules) {
            allModules = modules;
            $.each(modules, function (i, module) {
                module = module.moduleName;
                moduleId = i;
                $('#allModules').append('\
<label class="container">' + module + '\
    <input class="modules" id="' + i + '" type="checkbox" name="category" value="' + moduleId + '">\n\
    <span class="checkmark"></span>\n\
</label>');
            });

            modules = document.getElementsByClassName('modules');
            for (var i = 0; i < modules.length; i++) {
                modules[i].addEventListener('click', function () {
                    if (this.querySelector('input').checked === 'checked') {
                        sendingModules[i] = allModules[parseInt(this.id)];
                    }
                });
            }
        }
    });



//    function addModules(i) {
//        $.each(allModules, function (i, module) {
//            moduleName = module.topic;
//            moduleId = i;
//            $('#modules' + i).append(moduleHTML);
//        });
//    }

    $('#submit').click(function (event) {
        event.preventDefault();
        var module = {
            moduleName: $moduleName.val(),
            moduleDescription: $moduleDescription.val(),
            numTests: $numTests.val(),
            modules: sendingModules
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/create",
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

    $('#add').click(function () {
        $('#answers').append('\
<input type="text" class="answers" id="q' + numOfModules + '">\n\
<label class="container">\n\
    <input type="checkbox" id="check' + numOfModules + '">\n\
    <span class="checkmark"></span>\n\
</label>');
        numOfModules++;
    });

//    $('#add').click(function () {
//        numOfModules++;
//        $('#allModules').append('\
//<div class="container">\n\
//    <span class="choose">Choose Module</span>\n\
//    <div class="dropdown">\n\
//        <div class="select">\n\
//            <span>Select Modules</span>\n\
//            <i class="fa fa-chevron-left"></i>\n\
//        </div>\n\
//        <input type="hidden" name="gender">\n\
//        <ul id="modules' + numOfModules + '" class="dropdown-menu">\n\
//        <li id="Networking">Networking</li>\n\
//        </ul>\n\
//    </div>\n\
//    <span class="msg"></span>\n\
//</div>');
//        addModules(numOfModules);
//    });
});