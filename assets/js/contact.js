$(document).ready(function($){
    $("a#contact").on("click",function(){
        firstname = $("#firstname").val();
        lastname  = $("#lastname").val();
        email     = $("#email").val();
        website   = $("#website").val();
        country   = $("#country").val();
        volume    = $("#volume").val();
        info      = $("#info").val();
        /*console.log(firstname+" "+
        lastname+" "+
        email+" "+
        website+" "+
        country+" "+
        info);*/
        nombres = firstname+" "+lastname;
        Asunto = "Factura en UNA"+firstname+" "+lastname;
        Cuerpo = 
        "Nombres: "+firstname+" "+lastname+
        "Email:"+email+
        "Sitio Web:"+website+
        "Pais:"+country+
        "Cantidad:"+volume+
        "Informacion Adicional:"+info;
        soap(Asunto,Cuerpo,nombres);

    });
    function soap(Asunto,Cuerpo,nombres) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://eol.pe/wsemail/cnxServEnv.svc', true);

        // build SOAP request
        var sr ='<?xml version="1.0" encoding="utf-8"?>' +
            '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"'+

            'xmlns:tem="http://tempuri.org/"'+
            
            'xmlns:tt="http://schemas.datacontract.org/2004/07/TT.EOL.Level.BE.ENTIDAD">'+
            
        '<soapenv:Header/>'+
            
            '<soapenv:Body>'+
            
                '<tem:EnvioCorreoIndividual>'+
            
                    '<tem:oEmail>'+
            
                        '<tt:emisornif></tt:emisornif>'+
                        
                        '<tt:AliasNombre></tt:AliasNombre>'+
                        
                        '<tt:AliasNombre1>'+nombres+'</tt:AliasNombre1>'+
                        
                        '<tt:from>email</tt:from>'+
            
                        //'<tt:EmailTo>hola@taxtech.pe</tt:EmailTo>'+
            
                        '<tt:EmailCc>hiram_loreto@yahoo.com</tt:EmailCc>'+
            
                        '<tt:EmailBc></tt:EmailBc>'+
            
                        '<tt:strNomArchivo></tt:strNomArchivo>'+
            
                        '<tt:strAdicional1></tt:strAdicional1>'+
            
                        '<tt:strAdicional2></tt:strAdicional2>'+
            
                        '<tt:strAdicional3></tt:strAdicional3>'+
            
                        '<tt:strAdicional4></tt:strAdicional4>'+
            
                    '</tem:oEmail>'+
            
                    '<tem:oAsunto>'+Asunto+'</tem:oAsunto>'+
            
                    '<tem:oBody>'+Cuerpo+'</tem:oBody>'+
            
                    '<tem:oFlagUso>false</tem:oFlagUso>'+
            
                    '<tem:oTipo>0</tem:oTipo>'+
            
                '</tem:EnvioCorreoIndividual>'+
            
            '</soapenv:Body>'+
            
        '</soapenv:Envelope>';

        console.log(sr);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    alert('Aceptado');
                }
            }
        }
        //Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://eol.pe/');
        xmlhttp.send(sr);
        // send request
        // ..
        /*
        var createCORSRequest = function(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
              // Most browsers.
              xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
              // IE8 & IE9
              xhr = new XDomainRequest();
              xhr.open(method, url);
            } else {
              // CORS not supported.
              xhr = null;
            }
            return xhr;
          };
          
          var url = 'http://eol.pe/wsemail/cnxServEnv.svc';
          var method = 'POST';
          var xhr = createCORSRequest(method, url);
          
          xhr.onload = function() {
            // Success code goes here.
          };
          
          xhr.onerror = function() {
            // Error code goes here.
          };
          
          xhr.send();.*/
    }
}); 
