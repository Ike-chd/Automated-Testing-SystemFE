$(document).ready(function () {
    $("#submit").click(function () {
        var courseName = $("#cname").val();
        var courseNumber = $("#cnum").val();

        if (courseName === "" || courseNumber === "") {
            alert("Please fill out all fields.");
        } else {
            alert("Course created successfully!");
        }
    });
});
