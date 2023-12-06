$(function () {
    var $qname = $('#q');
    var $mark = $('#mark');
    var ans = 0;
    var check = 0;
    var topicName;
    var topicId;
    var topicHTML = '<option value=' + topicId + '>' + topicName + '</option>';

    $.ajax({
        type: 'GET',
        url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/topics/allTopics",
        success: function (topics) {
            $.each(topics, function (i, topic) {
                topicName = topic.topic;
                topicId = topic.topicId;
                $('#topics').append(topicHTML);
            });
        }
    });

    $('#submit').click(function () {
        var answers = $('.answers').map(function () {
            check++;
            return {
                answer: this.value,
                isCorrect: document.querySelector('#check' + check).checked
            };
        }).get();
        check = 0;
        var data = {
            question: $qname.html(),
            mark: $mark.val(),
            answers: answers
        };
        
        console.log(data);
        
        var sTopic = document.getElementById('topics');
        var settings = {
            url: "http://192.168.80.104:8080/Automated-Testing-SystemBE/resources/topics/postQuestion/" + sTopic.id,
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
    
    $('#add').click(function () {
        ans++;
        $('#answers').append('\
<input type="text" class="answers" id="q' + ans + '">\n\
<label class="container">\n\
    <input type="checkbox" id="check' + ans + '">\n\
    <span class="checkmark"></span>\n\
</label>');
    });
})();
