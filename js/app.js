let mensaje = "mensaje prueba";             /*Variable que va a contener el mensaje original*/
let mensajeC = "";         /*Variable para el texto cifrado*/
let mensajeN="";/**mensaje generado */
let abcMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
let textStatus = false;          /*Para saver si el texto va a estar cifrar = true o no = false*/
let textViable = false;          /*Verifica si el mensaje tiene la letras del abecedario y men minusculas */
let listL = ["e", "i", "a", "o", "u"];         /*Lista de letras a cifrar del mensaje*/
let listP = ["enter", "imes", "ai", "ober", "ufat"];   /*Lista de palabras a cifrar del mensaje*/



function evalua_mensaje(mensaje_ejemplo, textStatus, textViable, abcMinusculas) {
    /* en este ciclo for verificamos que se cumpla que este en minusculas y sin caracteres especiales */
    for (let indexCadena = 0; indexCadena < mensaje_ejemplo.length; indexCadena++) {
        for (let indexList = 0; indexList < abcMinusculas.length; indexList++) {
            console.log(`INDICE CADENA ${indexCadena} -- INDICE LISTA ${indexList}`)
            if (mensaje_ejemplo[indexCadena] == abcMinusculas[indexList]) {
                textViable = true;
                break;
            }
        }
    }

    // Usar el método some para verificar si alguna palabrade la lista está en la cadena
    textStatus = listP.some(palabra => mensaje_ejemplo.includes(palabra));
    console.log(`mensaje codificado ${textStatus}`);
    console.log(`mensaje viable ${textViable}`);
}

function generar_mensaje(mensaje,listL, listP, mensajeN) {
    for (let indexM = 0; indexM < mensaje.length; indexM++) {/**indexM indice de mensaje */
        for (let indexL = 0; indexL < listL.length; indexL++) {/**indexL indice de las listas */
            if (mensaje[indexM]==listL[indexL]) {
                mensajeN=mensajeN+listP[indexL];
                console.log(mensaje);
                console.log(mensajeN);
                indexM++;
                break;       
            }
        }
        if (indexM < mensaje.length) {
            mensajeN=mensajeN+mensaje[indexM];
            console.log(indexM);
        }
    }
    return(mensajeN);
}

console.log(`mensaje viable ${textViable}`);
console.log(`mensaje codificado ${textStatus}`);
evalua_mensaje(mensaje, textStatus, textViable, abcMinusculas);
if (!textStatus) {
    mensajeC=generar_mensaje(mensaje,listL, listP, mensajeN)/** codificamos el emsage y lo guardamos en mensajeC */
}

console.log(mensajeC);
