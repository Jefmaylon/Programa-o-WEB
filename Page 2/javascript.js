$(function(){
    $(":input").css("backgroundColor", "yellow");
    $(":text").css("backgroundColor", "gray");
    $(":password").css("backgroundColor", "gray");
    $(":radio").parent().css("backgroundColor", "blue");
    $(":checkbox").parent().css("backgroundColor", "blue");
    $(":submit").css("backgroundColor", "blue");
    $(":reset").css("backgroundColor", "blue");
    $(":disabled").css("opacity", "0.5");
    $(":checkbox:checked").parent().css("backgroundColor", "red");
    $(":radio").parent().css("backgroundColor", "red");
    $("#txt").val ($("option:selected").text() + " está selecionado");

});