var module = JSON.parse(sessionStorage.getItem('mod'));
var ip = sessionStorage.getItem('ip');

document.getElementById('module').value = module.moduleName;
document.getElementById('desc').innerHTML = module.moduleDescription;
$(function () {
    var $mname = $('#module');
    var $desc = $('#desc');

    $('#submit').click(function () {
        check = 0;
        var data = {
            moduleID: module.moduleID,
            moduleName: $mname.val(),
            moduleDescription: $desc.html()
        };
        var settings = {
            url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/modules/updateModule",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            complete: function(response){
                if(response.status >= 200 && response.status <= 299){
                    alert("Module successfully updated...");
                    window.history.go(-2);
                } else {
                    alert("Module NOT successfully updated...");
                }
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});