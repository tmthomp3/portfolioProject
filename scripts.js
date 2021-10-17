$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/* login modal*/ 
$(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});