let textNormal= "";             /*Variable que ba a contener el texto original*/
let textCodificado= "";         /*Variable para el texto cifrado*/
let abecedarioMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ']
let textEtatus= false;          /*Para saver si el texto va a estar cifrar = true o no = false*/ 
let textViable= false;          /*Verifica si el mensaje tiene la letras del abecedario y men minusculas */
let listaTextNormal=["e","i","a","o","u"];         /*Lista de palabras o letras a cifrar del mensaje*/
let listaTextCodificación =["enter","imes","ai","ober","ufat"];   /*Lista cifrado de las palabras*/
let mensaje_ejemplo="mensaje normal aeiou"; /*cuando de termine el progranma se borrara*/
let mensaje_ejemplo_cifrado="aienterimesoberufat";
/*Ocultar botón de copiar*/


function evalua_mensaje(mensaje_ejemplo,textEtatus,textViable,abecedarioMinusculas) {
/* en este ciclo for verificamos que se cumpla que este en minusculas y sin caracteres especiales */
    for (let indexCadena = 0; indexCadena < mensaje_ejemplo.length; indexCadena++) {
        for (let indexList = 0; indexList < abecedarioMinusculas.length; indexList++) {
            console.log(`INDICE CADENA ${indexCadena} -- INDICE LISTA ${indexList}`)
            if (mensaje_ejemplo[indexCadena]==abecedarioMinusculas[indexList]) {
                textViable=true;
                break;
            }
        }
    }

// Usar el método some para verificar si alguna palabrade la lista está en la cadena
    textEtatus = listaTextCodificación.some(palabra => mensaje_ejemplo.includes(palabra));
    console.log(`mensaje codificado ${textEtatus}`);
    console.log(`mensaje viable ${textViable}`);
}

function cifraDecifraMensaje(listaTextNormal,listaTextCodificación,textViable,textEtatus) {
/*si mensaje esta cifrado*/
    if (textViable==true || textEtatus==true) {
        let mensaje=
        console.log("imprime mensaje normal");
    } if (textViable==true || textEtatus==false) { /*si mensaje no esta cifrado*/
        console.log("imprime mensaje cifrado del lado derecho");
    } else {
        console.log("error");
    }

    
}

console.log(`mensaje viable ${textViable}`);
console.log(`mensaje codificado ${textEtatus}`);
evalua_mensaje(mensaje_ejemplo,textEtatus,textViable,abecedarioMinusculas);
cifraDecifraMensaje(listaTextNormal,listaTextCodificación,textViable,textEtatus)
