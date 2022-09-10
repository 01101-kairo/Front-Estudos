// NA SINTAXE DO JQUERY, O "$" É A FUNÇÃO CONSTRUTORA (OU jquery), USADA PARA CHAMAR COISAS, COMO SELETORES IGUAIS AOS DO CSS.
$(document).ready(function(){

    $("h1").attr("class","cor");

    // $(".ocultar").click(function(){
    //     $(this).hide();
    // });

    // OCULTAR
    $(".ocultar").click(function(){
        $(".texto").hide();
    });

    // MOSTRAR
    $(".mostrar").click(function(){
        $(".texto").show();
    });

    // MOSTRAR / OCULTAR
    $(".efeito").click(function(){
        $(".texto").toggle("slow");
    });

    // ADICIONAR CLASSE
    $(".add-classe").click(function(){
        $(".texto2").addClass("exemplo");
    });

    // REMOVER CLASSE
    $(".remover-classe").click(function(){
        $(".texto2").removeClass("exemplo");
    });

    // ADD E REMOVER CLASSE
    $(".mudar-classe").click(function(){
        $(".texto2").toggleClass("exemplo");
        $(".texto2").html("texto de teste");
    });

    // MUDAR CSS
    $(".mudar-css").click(function(){
        $(".texto2").css({
            "background":"#900",
            "color":"#fff"
        });
    });

    // MUDAR HTML
    $(".mudar-html").click(function(){
        $(".texto3").html("<p>Novo Texto</p>");
    });

    // MUDAR ATRIBUTOS DO HTML
    $(".mudar-imagem").click(function(){
        $(".imagem").attr("src","../Imagens/Fotos/conheca-2.png");
        $(".imagem").attr("alt","Pessoa Pulando");
    });

});
