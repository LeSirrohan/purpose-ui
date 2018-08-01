$(document).ready(function($){

    ventana_ancho = $(window).width();
    ventana_alto  = $(window).height();
    ventana_alto2 = ventana_alto*0.752;
    ventana_alto3 = ventana_alto*1.852;
    ventana_alto4 = ventana_alto*1.552;
    $("a#btn_max").hide();
    $("#btn_min").show();

    if(ventana_ancho >= 1010)
    {
        $("#btn_min").hide();
        $("a#btn_max").show();
        $("#slider1").removeClass("mt-1");
        $("#slider1").addClass("mt-5");
    }
    if(ventana_ancho < 1010)
    {
        $("a#btn_max").hide();
        $("#btn_min").show();
        $("#slider1").removeClass("mt-5");
        $("#slider1").addClass("mt-7");
    }    
    function cambios()
    {
        $("div#seccion1_botones1").removeClass("mt-5");
        $("div#seccion1_botones1").addClass("text-right");
        $("a#btn_3").removeClass("mr-3");
        $("a#btn_3").addClass("mb-2");
        $("a#btn_4").removeClass("ml-3");
        $("div#texto_cuerpo_2").removeClass("px-5");
        $("div#texto_cuerpo_2").addClass("px-1");        
        $("p#texto_cuerpo_3").removeClass("mt-3");
        $("p#texto_cuerpo_3").addClass("mb-1");
        $("div#enlaceFooter1").removeClass("mt-3");
        $("div#enlaceFooter2").removeClass("mt-3");
        $("div#enlaceFooter3").removeClass("mt-3");
        $("div#enlaceFooter4").removeClass("mt-3");
        $("div#enlaceFooter1").removeClass("mb-3");
        $("div#enlaceFooter2").removeClass("mb-3");
        $("div#enlaceFooter3").removeClass("mb-3");
        $("div#enlaceFooter4").removeClass("mb2-3");
        $(".frame-laptop").css("z-index","0");
    }
    if(ventana_ancho < 385)
    {       
        cambios();        
        $("nav#navbar_main").removeClass("bg-stripes2");
        $("nav#navbar_main").addClass("bg-stripes4");
        $("#seccion2").css("height", ventana_alto);
        $("#seccion4").css("height", ventana_alto3);
    }
    else
    {
        if(ventana_ancho >= 385 & ventana_ancho< 415)
        {
            cambios();        
            $("nav#navbar_main").removeClass("bg-stripes2");
            $("nav#navbar_main").addClass("bg-stripes4");
            $("#seccion2").css("height", ventana_alto2);
            $("#seccion4").css("height", ventana_alto4);
            //console.log("385 415");
        }
        if(ventana_ancho >= 415 & ventana_ancho< 765)
        {
            cambios();        
            $("nav#navbar_main").removeClass("bg-stripes2");
            $("nav#navbar_main").addClass("bg-stripes5");
            $("#seccion2").css("height", ventana_alto2);
            $("#seccion4").css("height", ventana_alto4);
            //console.log("765 1024");
        }
        else
        {
            if(ventana_ancho >= 765 & ventana_ancho< 1010)
            {
                console.log("765 1010");
                cambios();
            }
        }
    }
    /*
    $("a#boton1").on("click",function(){
        alert("Boton1");
    });
    $("a#boton2").on("click",function(){
        alert("Boton2");
    });
    $("a#boton3").on("click",function(){
        alert("Boton3");
    });*/
    
    $("#seccion2").css("height", ventana_alto2);
    $("#seccion4").css("height", ventana_alto);
    $("#seccion_1").css("height", ventana_alto);
    $("#seccion3").css("height", ventana_alto);
    $("#obligado").css("height", ventana_alto);
   // $("#login_form").css("height", ventana_alto);
    //console.log(ventana_ancho+" "+ventana_alto);
}); 
