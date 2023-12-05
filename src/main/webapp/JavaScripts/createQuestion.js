

(function () {
    var ans = 1;

    $('#add').click(function () {
        ans++;
        $('#answers').append('<input type="text" id="q' + ans + '">');
    });
})();
