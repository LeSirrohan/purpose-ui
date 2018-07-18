$(document).ready(function($){
	var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    /*$("#btn_min").hide();
    $("li#btn_max").show();*/

    if(ventana_ancho <845){
        $("#btn_max").hide();
        $("#btn_min").show();
    }
    if(ventana_ancho >=845){
        $("#btn_max").show();
        $("#btn_min").hide();
    }
    console.log(ventana_ancho+" "+ventana_alto);
}); 