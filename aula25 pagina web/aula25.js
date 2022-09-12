$(document).ready(function(){
    // FECHAR MODAL
    $(".fechar-modal,.fundo-modal").click(function(){
        $(".container-modal").hide();
    });

    // TOPO FIXO
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("header").addClass("topo-fixo");
        }else{
            $("header").removeClass("topo-fixo");
        }
    });

    // ACCORDION
    $(".menu p").click(function(){
        $(this).next(".submenu").toggle("fast");
        $(this).toggleClass("open");
    });
});
