var allAdmins;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    var $admins = $('#allAdmins');

    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/allAdmins",
        success: function (admins) {
            allAdmins = admins;
            $.each(admins, function (i, admin) {
                if(!admin.isSuperAdmin){
                $admins.append('\n\
<div id="s' + i + '" class="wrapper">\n\
    <h1 style="display: inline">' + admin.name + ' ' + admin.surname + '</h1>\n\
    <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-envelope" style="margin-right: 5px;"></i>' + admin.email + '</h5>\n\
    <div id="f1" class="btnflex">\n\
        <button class="btn ' + i + '">Update</button>\n\
    </div>\n\
</div>');
                }
            });
        }
    });
});
