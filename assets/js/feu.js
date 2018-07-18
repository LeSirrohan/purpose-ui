$(document).ready(function($){
	var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    $("a#btn_max").hide();
    $("#btn_min").show();

    if(ventana_ancho >= 1010){
        $("#btn_min").hide();
        $("a#btn_max").show();
        /*$("#navbar_main").addClass();
        $("#navbar_main").removeClass();*/

    }
    if(ventana_ancho < 1010){
        $("a#btn_max").hide();
        $("#btn_min").show();
    }
    console.log(ventana_ancho+" "+ventana_alto);
}); 