var allModules;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/allModules",
        success: function (modules) {
            allModules = modules;
            $.each(modules, function (i, module) {
                $('#allModules').append('\
    <div class="wrapper">\n\
        <h1>' + module.moduleName + '</h1>\n\
        <h4 style="margin-bottom: 5px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + module.moduleDescription + '</span>\n\
        </h4><h5>Prerequisite Modules:</h5><div id="preQmod' + i + '"></div>\n\
        <div id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">Update</button>\n\
            <button class="btn ' + i + '">View All Tests</button>\n\
            <button class="btn ' + i + '">Delete</button>\n\
        </div>\n\
    </div>');
                if (module.modules.length === 0) {
                    $('#preQmod' + i).append('<h6 style="margin-left: 5px;">None</h6>');
                } else {
                    $.each(module.modules, function (j, preM) {
                        $('#preQmod' + i).append('<h6 style="margin-left: 5px;">' + preM.moduleName + '</h6>');
                    });
                }
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'Update') {
                        update(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'View All Tests') {
                        viewAll(parseInt(this.classList[1]));
                    } else if (this.innerHTML === 'Delete') {
                        Delete(parseInt(this.classList[1]));
                    }
                });
            }

            function update(i) {
                sessionStorage.setItem('mod', JSON.stringify(allModules[i]));
                window.location.href = 'updateModule.html';
            }

            function viewAll(i) {
                sessionStorage.setItem('mid', allModules[i].moduleID);
                window.location.href = 'allTestsUnderM.html';
            }

            function Delete(i) {
                var choice = prompt('Are you sure you like like to delete this Module | Yes/No');
                if (choice.toString().toLowerCase() === 'yes') {
                    $.ajax({
                        type: 'GET',
                        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/deleteModule/" + allModules[i].moduleID,
                        complete: function (response) {
                            if (response.status >= 200 && response.status <= 299) {
                                alert("Module successfully deleted...");
                                window.history.go(-1);
                            } else {
                                alert("Module Not deleted successfully");
                            }
                        }
                    });
                }
            }
        }
    });
});