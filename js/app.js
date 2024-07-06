let abcedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
let esViable = false;          /*Verifica si el mensaje tiene la letras del abecedario y men minusculas */
let listL = ["e", "i", "a", "o", "u"];         /*Lista de letras a cifrar del mensaje*/
let listP = ["enter", "imes", "ai", "ober", "ufat"];   /*Lista de palabras a cifrar del mensaje*/
let mensaje="";

/**funcion que evalua el mensaje si esta en minusculas, sin caracteres especiales */
function evalua_mensaje(mensaje, abcedario) {
    /* en este ciclo for verificamos que se cumpla que este en minusculas y sin caracteres especiales */
    for (let index = 0; index < mensaje.length; index++) {
        alert(mensaje)
        if (abcedario.includes(mensaje[index])) {
            esViable=true;
        } else {
            esViable=false;
            break;
        }
    }

    // Usar el método some para verificar si alguna palabrade la lista está en la cadena
    esViable = (mensaje===mensaje.toLowerCase()) ? true : false;
    return (esViable);
}

/**funcion para codifica/decodificar mensaje */
function codiDecodiMensaje (mensaje,listaParametro,listaRemplazo) {
    for (let index = 0; index < listaParametro.length; index++) {
        mensaje=mensaje.replaceAll(listaParametro[index], listaRemplazo[index]);
    }
    return mensaje;
}

/**funcion del boton encriptar */
function encriptar(mensaje) {
    mensaje=document.querySelector("#entrada__texto").value;
    console.log(`mensaje viable en funcion encriptar ${esViable}`);
    alert(mensaje)
    alert("es variable: "+ esViable)
    if (esViable) {
        alert("es viable");
    } else {
        alert("error al ingresar mensaje")
    }
}

esViable=evalua_mensaje(mensaje, abcedario);

/*codificar mensaje con funcion e imprimirlo*/
console.log(`el texto cifrado es: ${codiDecodiMensaje(mensaje,listL,listP)}`);
/*decodificar mensaje con funcion e imprimirlo*/
console.log(`el texto decifrado es : ${codiDecodiMensaje(mensaje,listP,listL)}`);