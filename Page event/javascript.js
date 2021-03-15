$(function(){

    $(".coordenadas").mouseenter(function(){
        console.log("O mouse entrou no retângulo");
        $(".valores").fadeIn(200);
    });

    $(".coordenadas").mousemove(function(e){
        console.log(e.clientX, e.clientY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;
        $(".valores").html(`Coordenadas x: ${x} e y: ${y}`);
    });

    $(".coordenadas").mouseout(function(){
       console.log("O mouse saiu do retângulo"); 
       $(".valores").fadeOut(200);
    });

});