var module;
var moduleId;
var modules;
var allModules;
var ip = sessionStorage.getItem('ip');
var numOfModules = 0;
var sendingModules;

$(function () {
    $('#request').click(function () {
        $('.req').slideToggle(1000);
    });

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
        $('#Modules').empty();
        sendingModules = $('.modules').map(function () {
            if (this.checked) {
                return allModules[parseInt(this.id)];
            }
        }).get();
        for (var i = 0; i < modules.length; i++) {
            if (modules[i].checked) {
                var module = allModules[i];
                $('#Modules').append('\
    <div class="wrapper" style="width: 100%; margin-bottom: 10px;">\n\
        <h1 style="color: black;">' + module.moduleName + '</h1>\n\
        <h4 style="margin-bottom: 5px; color: black;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + module.moduleDescription + '</span>\n\
        </h4><h5 style="color: black;">Prerequisite Modules:</h5><div id="preQmod' + i + '"></div>\n\
    </div>');
                if (module.modules.length === 0) {
                    $('#preQmod' + i).append('<h6 style="margin-left: 5px; color: black;>None</h6>');
                } else {
                    $.each(module.modules, function (j, preM) {
                        $('#preQmod' + i).append('<h6 style="margin-left: 5px; color: black;>' + preM.moduleName + '</h6>');
                    });
                }
            }
        }
    });

    $('#add').click(function () {
        sendingModules = [];
    });

    $('#submit').click(function () {
        date = new Date($('#start').val());
        date.setHours(0, 0, 0, 0);
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/courses/updateModules/" + sessionStorage.getItem('cid'),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(sendingModules),
            complete: function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    alert("Modules successfully added...");
                    window.history.go(-1);
                } else {
                    alert("Modules NOT successfully added...");
                }
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});