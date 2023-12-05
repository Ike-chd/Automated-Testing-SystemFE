$(function () {
    var $qname = $('#q');
    var $mark = $('#mark');
    var ans = 0;
    var check = 0;

    $('#submit').click(function () {
        var answers = $('.answers').map(function () {
            check++;
            return {
                answer: this.value,
                isCorrect: document.querySelector('#check' + check).checked
            };
        }).get();
        var data = {
            question: $qname.html(),
            mark: $mark.val(),
            answers: answers
        };
        console.log(data);
    });
    $('#add').click(function () {
        ans++;
        $('#answers').append('\
<input type="text" class="answers" id="q' + ans + '">\n\
<label class="container">\n\
    <input type="checkbox" id="check'+ ans +'">\n\
    <span class="checkmark"></span>\n\
</label>');
    });
});