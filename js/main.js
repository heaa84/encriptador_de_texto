let abcedario =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
let esViable = false;          /*Verifica si el mensaje tiene la letras del abecedario y men minusculas */
let listL = ["e", "i", "a", "o", "u"];         /*Lista de letras a cifrar del mensaje*/
let listP = ["enter", "imes", "ai", "ober", "ufat"];   /*Lista de palabras a cifrar del mensaje*/

/**llamada de elementos y guardarlo en una variable*/
const mensajeProcesado= document.querySelector(".texto__encriptado");
const contenedorTextos= document.querySelector(".contenedor__ningun__mensaje");
const btnCopiar= document.querySelector(".btn__copiar");
const entradaTexto= document.querySelector("#entrada__texto");
const imgLupa= document.querySelector(".img__lupa");
const salida= document.querySelector(".texto__encriptado");

/*botones*/
const btnEncriptar=document.querySelector(".btn__encriptar");
const btnDecencriptar=document.querySelector(".btn__decencriptar");
const btnCopy=document.querySelector(".btn__copiar");

btnEncriptar.addEventListener("click",()=>encriptar());
btnDecencriptar.addEventListener("click",()=>decencriptar());
btnCopy.addEventListener("click",()=>btn_copy());

//mensajes de alert
const mensajeError="El mensaje tiene caracteres no \n permitidos o \n esta vacio"


/**funcion que evalua el mensaje si esta en minusculas, sin caracteres especiales */
function evalua_mensaje(mensaje, abcedario) {
    /* en este ciclo for verificamos que se cumpla que este en minusculas y sin caracteres especiales */
    for (let index = 0; index < mensaje.length; index++) {
        if (abcedario.includes(mensaje[index])) {
            esViable = true;
        } else {
            esViable = false;
            return (esViable);
        }
    }

    // Usar el método some para verificar si alguna palabrade la lista está en la cadena
    esViable = (mensaje === mensaje.toLowerCase()) ? true : false;
    return (esViable);
};

/**funcion para codifica/decodificar mensaje */
function codiDecodiMensaje(mensaje, listaParametro, listaRemplazo) {
    for (let index = 0; index < listaParametro.length; index++) {
        mensaje = mensaje.replaceAll(listaParametro[index], listaRemplazo[index]);
    }
    return mensaje;
};

/**funcion del boton encriptar */
function encriptar(mensaje) {
    mensaje = entradaTexto.value;
    esViable = evalua_mensaje(mensaje, abcedario);

    if (esViable && mensaje.length > 1) {
        if (imgLupa) {
            
            imgLupa.style.display="none"; /**ocultanos la imagen de la lupa */
        }
        mensajeProcesado.innerHTML = ` ${codiDecodiMensaje(mensaje, listL, listP)}`;
        entradaTexto.value = " ";
        btnCopiar.style.display="block"; 
        contenedorTextos.style.display="none"; 
        salida.style.display="block";
    } else {
        alerta(mensajeError);
        document.querySelector("fieldset").style.backgroundColor=("red");
    }
};

/**funcion de boton decencriptas */
function decencriptar(mensaje) {
    mensaje = entradaTexto.value;
    esViable = evalua_mensaje(mensaje, abcedario);
    if (esViable && mensaje.length > 1) {
        mensajeProcesado.innerHTML = ` ${codiDecodiMensaje(mensaje, listP, listL)}`;
        entradaTexto.value = " ";
        btnCopiar.style.display="block"; 
        salida.style.display="block";
    } else {
        alerta(mensajeError);
    }
};

/**funcion del boton copiar */
function btn_copy() {
    let textoCopyado = mensajeProcesado.innerText;

    // Usar la API del Portapapeles para copiar el texto
    navigator.clipboard.writeText(textoCopyado)
    //alert(`texto; ${textoCopyado} copiado en porta papeles.`);
    alerta(`Se Copio: ${textoCopyado}`)
    document.querySelector("fieldset").style.backgroundColor=("hwb(117.04deg 9.02% 35.29%)");
    mensajeProcesado.innerHTML=" ";
    btnCopiar.style.display= "none"; 
};

function alerta(mensajeAlert) {
    document.querySelector("#contenedor__alert").style.display="block";
    document.querySelector("#mensaje").innerText=mensajeAlert;
    document.querySelector("#btn__alert").addEventListener("click",()=>{
        document.querySelector("#contenedor__alert").style.display="none";
    });
}


