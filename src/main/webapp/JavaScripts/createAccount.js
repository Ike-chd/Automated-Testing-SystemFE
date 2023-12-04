$(function () {
    var $sbtn = $('#sbtn');
    var $fbtn = $('#fbtn');
    var $abtn = $('#abtn');
    
    $sbtn.click(function () {
        if($('#wr2').style.display !== 'none'){
            $('#wr2').fadeOut(1000);
            $('#wr1').fadeIn(1000);
        }
        if($('#wr3').style.display !== 'none'){
            $('#wr3').fadeOut(1000);
            $('#wr1').fadeIn(1000);
        }
    });
    
    $fbtn.click(function () {
        if($('#wr1').style.display !== 'none'){
            $('#wr1').fadeOut(1000);
            $('#wr2').fadeIn(1000);
        }
        if($('#wr3').style.display !== 'none'){
            $('#wr3').fadeOut(1000);
            $('#wr2').fadeIn(1000);
        }
    });
    
    $abtn.click(function () {
        if($('#wr1').style.display !== 'none'){
            $('#wr1').fadeOut(1000);
            $('#wr3').fadeIn(1000);
        }
        if($('#wr2').style.display !== 'none'){
            $('#wr2').fadeOut(1000);
            $('#wr3').fadeIn(1000);
        }
    });
});