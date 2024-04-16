function enviarAccion() {
    var radios = document.getElementsByName('accion');
    var mensaje = document.getElementById("mensaje").value;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var accion = radios[i].value;
            var clave = document.getElementById("clave_cifrado1").value;
            cifrarDescifrar(mensaje, accion, clave);
            break;
        }
    }
}
function cifrarDescifrar(mensaje, accion, clave) {
    var clave = document.getElementById("clave_cifrado1").value;
    if (clave < 26 && clave > 0) {
        var letras = mensaje.split('');
        var letras_a_numeros = [];
        for (i = 0; i < letras.length; i++) {
            switch (letras[i]) {
                case "a":
                case "A":
                    letras_a_numeros[i] = 0;
                    break;
                case "b":
                case "B":
                    letras_a_numeros[i] = 1;
                    break;
                case "c":
                case "C":
                    letras_a_numeros[i] = 2;
                    break;
                case "d":
                case "D":
                    letras_a_numeros[i] = 3;
                    break;
                case "e":
                case "E":
                    letras_a_numeros[i] = 4;
                    break;
                case "f":
                case "F":
                    letras_a_numeros[i] = 5;
                    break;
                case "g":
                case "G":
                    letras_a_numeros[i] = 6;
                    break;
                case "h":
                case "H":
                    letras_a_numeros[i] = 7;
                    break;
                case "i":
                case "I":
                    letras_a_numeros[i] = 8;
                    break;
                case "j":
                case "J":
                    letras_a_numeros[i] = 9;
                    break;
                case "k":
                case "K":
                    letras_a_numeros[i] = 10;
                    break;
                case "l":
                case "L":
                    letras_a_numeros[i] = 11;
                    break;
                case "m":
                case "M":
                    letras_a_numeros[i] = 12;
                    break;
                case "n":
                case "N":
                    letras_a_numeros[i] = 13;
                    break;
                case "o":
                case "O":
                    letras_a_numeros[i] = 14;
                    break;
                case "p":
                case "P":
                    letras_a_numeros[i] = 15;
                    break;
                case "q":
                case "Q":
                    letras_a_numeros[i] = 16;
                    break;
                case "r":
                case "R":
                    letras_a_numeros[i] = 17;
                    break;
                case "s":
                case "S":
                    letras_a_numeros[i] = 18;
                    break;
                case "t":
                case "T":
                    letras_a_numeros[i] = 19;
                    break;
                case "u":
                case "U":
                    letras_a_numeros[i] = 20;
                    break;
                case "v":
                case "V":
                    letras_a_numeros[i] = 21;
                    break;
                case "w":
                case "W":
                    letras_a_numeros[i] = 22;
                    break;
                case "x":
                case "X":
                    letras_a_numeros[i] = 23;
                    break;
                case "y":
                case "Y":
                    letras_a_numeros[i] = 24;
                    break;
                case "z":
                case "Z":
                    letras_a_numeros[i] = 25;
                    break;
                default:
                    letras_a_numeros[i] = -1;
                    break;
            }
        }
        var cifrado = [];
        for (i = 0; i < letras.length; i++) {
            if (parseInt(letras_a_numeros[i]) !== -1) {
                if (accion === "cifrar") {
                    cifrado[i] = parseInt(letras_a_numeros[i]) + parseInt(clave) % 26;
                } else if (accion === "descifrar") {
                    cifrado[i] = parseInt(letras_a_numeros[i]) - parseInt(clave) % 26;
                }
            }
        }
        var numeros_A_letras = [];
        for (i = 0; i < cifrado.length; i++) {
            switch (parseInt(cifrado[i])) {
                case 0:
                    numeros_A_letras[i] = "a";
                    break;
                case 1:
                    numeros_A_letras[i] = "b";
                    break;
                case 2:
                    numeros_A_letras[i] = "c";
                    break;
                case 3:
                    numeros_A_letras[i] = "d";
                    break;
                case 4:
                    numeros_A_letras[i] = "e";
                    break;
                case 5:
                    numeros_A_letras[i] = "f";
                    break;
                case 6:
                    numeros_A_letras[i] = "g";
                    break;
                case 7:
                    numeros_A_letras[i] = "h";
                    break;
                case 8:
                    numeros_A_letras[i] = "i";
                    break;
                case 9:
                    numeros_A_letras[i] = "j";
                    break;
                case 10:
                    numeros_A_letras[i] = "k";
                    break;
                case 11:
                    numeros_A_letras[i] = "l";
                    break;
                case 12:
                    numeros_A_letras[i] = "m";
                    break;
                case 13:
                    numeros_A_letras[i] = "n";
                    break;
                case 14:
                    numeros_A_letras[i] = "o";
                    break;
                case 15:
                    numeros_A_letras[i] = "p";
                    break;
                case 16:
                    numeros_A_letras[i] = "q";
                    break;
                case 17:
                    numeros_A_letras[i] = "r";
                    break;
                case 18:
                    numeros_A_letras[i] = "s";
                    break;
                case 19:
                    numeros_A_letras[i] = "t";
                    break;
                case 20:
                    numeros_A_letras[i] = "u";
                    break;
                case 21:
                    numeros_A_letras[i] = "v";
                    break;
                case 22:
                    numeros_A_letras[i] = "w";
                    break;
                case 23:
                    numeros_A_letras[i] = "x";
                    break;
                case 24:
                    numeros_A_letras[i] = "y";
                    break;
                case 25:
                    numeros_A_letras[i] = "z";
                    break;
                default:
                    numeros_A_letras[i] = " ";
                    break;
            }
        }
        var mensaje_cifrado = "";
        for (i = 0; i < numeros_A_letras.length; i++) {
            mensaje_cifrado += numeros_A_letras[i];
        }
        var respuestaContainer = document.getElementById("respuesta-container");
        respuestaContainer.textContent = "";
        escribirComoMaquina(mensaje_cifrado, respuestaContainer, accion === "cifrar");
        return mensaje_cifrado;

    }
}

function escribirComoMaquina(texto, contenedor, esCifrado) {
    var velocidadEscritura = 60; 
    var indice = 0;
    var mensajeTipo = esCifrado ? "El mensaje cifrado es " : "El mensaje descifrado es ";
    var textoCompleto = mensajeTipo + texto; 

    function escribir() {
        contenedor.textContent += textoCompleto.charAt(indice);
        indice++;
        if (indice < textoCompleto.length) {
            setTimeout(escribir, velocidadEscritura);
        }
    }

    escribir();
}



function filtro(Evento, type) {
    var numeros = "0123456789";
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var teclas_especiales = [8, 9, 37, 39, 46];

    var permitidos = "";
    switch (type) {
        case 'numeros':
            permitidos = numeros;
            break;
        case 'caracteres':
            permitidos = caracteres;
            break;

    }
    var evento = Evento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);


    var tecla_especial = false;
    for (var i in teclas_especiales) {
        if (codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true;
            break;
        }
    }


    if (!(permitidos.indexOf(caracter) != -1 && !tecla_especial)) {
        evento.preventDefault();
    }
}
function escribirComoMaquina(texto, contenedor, esCifrado) {
    var velocidadEscritura = 60; 
    var indice = 0;
    var mensajeTipo = esCifrado ? "El mensaje cifrado es " : "El mensaje descifrado es ";
    var textoCompleto = mensajeTipo + texto; 

    function escribir() {
        contenedor.textContent += textoCompleto.charAt(indice);
        indice++;
        if (indice < textoCompleto.length) {
            setTimeout(escribir, velocidadEscritura);
        }
    }

    escribir();
}



function filtro(Evento, type) {
    var numeros = "0123456789";
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var teclas_especiales = [8, 9, 37, 39, 46];

    var permitidos = "";
    switch (type) {
        case 'numeros':
            permitidos = numeros;
            break;
        case 'caracteres':
            permitidos = caracteres;
            break;

    }
    var evento = Evento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);


    var tecla_especial = false;
    for (var i in teclas_especiales) {
        if (codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true;
            break;
        }
    }


    if (!(permitidos.indexOf(caracter) != -1 && !tecla_especial)) {
        evento.preventDefault();
    }
}
