function cifrar() {
    var mensaje = document.getElementById("mensaje_cifrar").value;
    var clave = document.getElementById("clave_cifrado1").value;
    if (clave < 26 && clave > 0) {
        alert("ya te cifro " + clave + mensaje);
    }
}
function descifrar() {
    var clave = document.getElementById("clave_cifrado2").value;
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