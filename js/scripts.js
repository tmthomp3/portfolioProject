/* Tooltip*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
    

/*Login Modal*/
$(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});