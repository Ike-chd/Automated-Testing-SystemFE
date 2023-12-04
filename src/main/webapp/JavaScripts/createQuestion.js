$(function(){
    var $qname = $('#qname');
    var $mark = $('#mark');
    var $q1 = $('#q1');
    var $q2 = $('#q2');
    var $q3 = $('#q3');
    var $q4 = $('#q4');
    var ans = 1;
    
    $('#submit').click(function() {
        var data = {
            question : $qname.val(),
            mark : $mark.val(),
            q1 : $q1.val()
        };
        console.log(data);
    });
    $('#add').click(function () {
        ans++;
        $('#answers').append('<input type="text" id="q'+ans+'">');
    });
});