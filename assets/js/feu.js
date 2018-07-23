$(document).ready(function($){
	var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
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
    $("#seccion2").css("height", ventana_alto);
    $("#seccion3").css("height", ventana_alto);
    $("#obligado").css("height", ventana_alto);
    //console.log(ventana_ancho+" "+ventana_alto);
}); 
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}