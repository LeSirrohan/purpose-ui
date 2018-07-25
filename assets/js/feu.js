$(document).ready(function($){
	var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    var ventana_alto2 = ventana_alto*0.7;
    $("a#btn_max").hide();
    $("#btn_min").show();

    if(ventana_ancho >= 1010){
        $("#btn_min").hide();
        $("a#btn_max").show();
        $("#slider1").removeClass("mt-1");
        $("#slider1").addClass("mt-5");

    }
    if(ventana_ancho < 1010){
        $("a#btn_max").hide();
        $("#btn_min").show();
        $("#slider1").removeClass("mt-5");
        $("#slider1").addClass("mt-7");
    }
    $("#seccion1").css("height", ventana_alto);
    $("#seccion2").css("height", ventana_alto2);
    $("#seccion3").css("height", ventana_alto);
    $("#seccion4").css("height", ventana_alto);
    $("#obligado").css("height", ventana_alto);
    //console.log(ventana_ancho+" "+ventana_alto);
}); 
