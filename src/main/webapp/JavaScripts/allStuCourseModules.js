var allModules;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/allModules/byCourse/" + sessionStorage.getItem('cid'),
        success: function (modules) {
            allModules = modules;
            $.each(modules, function (i, module) {
                $('#allModules').append('\
    <div class="wrapper">\n\
        <h1>' + module.moduleName + '</h1>\n\
        <h4 style="margin-bottom: 5px;"><i class="bx bx-link-alt" style="margin-right: 5px;"></i><span>' + module.moduleDescription + '</span>\n\
        <div id="f1" class="btnflex">\n\
            <button class="btn ' + i + '">View All Tests</button>\n\
        </div>\n\
    </div>');
            });
            allBtns = document.getElementsByClassName('btn');
            for (var i = 0; i < allBtns.length; i++) {
                allBtns[i].addEventListener('click', function () {
                    if (this.innerHTML === 'View All Tests') {
                        viewAll(parseInt(this.classList[1]));
                    }
                });
            }
            function viewAll(i) {
                sessionStorage.setItem('mid', allModules[i].moduleID);
                window.location.href = 'allTestsUnderM.html';
            }
        }
    });
});