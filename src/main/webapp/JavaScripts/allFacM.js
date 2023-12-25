var allFacMs;
var ip = sessionStorage.getItem('ip');
var allBtns;

$(function () {
    var $facm = $('#allFacMs');
    $.ajax({
        type: 'GET',
        url: "http://" + ip + ":8080/Automated-Testing-SystemBE/resources/accounts/allFacM",
        success: function (facMs) {
            allFacMs = facMs;
            $.each(facMs, function (i, facM) {
                $facm.append('\n\
<div id="s' + i + '" class="wrapper">\n\
    <h1 style="display: inline">' + ((facM.professor) ? 'Prof. ' : '') + facM.name + ' ' + facM.surname + '</h1>\n\
    <h5 style="display: inline; margin-left: 30px;"><i class="bx bx-envelope" style="margin-right: 5px;"></i>' + facM.email + '</h5>\n\
</div>');
            });
        }
    });
});