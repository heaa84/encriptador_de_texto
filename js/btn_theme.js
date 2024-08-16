const btnTheme=document.querySelector(".borde__btn__theme");
const esfera=document.querySelector("#esfera");
const body=document.querySelector("body");
const svgIcono=document.querySelector("#svg__icono");
const svgLupa=document.querySelector("#svg__lupa");
const botonEnc=document.getElementById("boton__encriptar"); 
const botonDes=document.getElementById("boton__desencriptar"); 
const botonCopy=document.getElementById("boton__copia");
let posicionEsfera=1;

const btnColorOver="red";


class btn {
    cambiarTema=()=>{
        if (posicionEsfera==1) {// si la esfera esta ala izquierda
            var intervaloTiempo=setInterval(moverDerecha, 5);
            var blanco=0;
            var tonoBtn=100;
            var tonoBody=100; 
            var tonoSvg=0;
            var tonoBotones=165; /*165.63*/
            function moverDerecha() {
                posicionEsfera++;
                esfera.style.left=`${posicionEsfera}px`;  
                esfera.style.background=`radial-gradient(circle at bottom,hwb(0 100% 15%),hwb(112 ${blanco+=3.3}% 0%))`;
                btnTheme.style.backgroundColor= `hwb(112 ${tonoBtn-=3.448275862068966}% 3%)`;
                body.style.background=`hwb(48 ${tonoBody-=3.448275862068966}% 10%)`; //color fondo
                svgIcono.style.filter=`hue-rotate(${tonoSvg-=2}deg)`;
                svgLupa.style.filter=`hue-rotate(${tonoSvg}deg)`;
                botonEnc.style.background=`hwb(${tonoBotones-=1.655172413793103} 9.02% 35.29%)`;
                botonDes.style.background=`hwb(${tonoBotones} 9.02% 35.29%)`;
                botonCopy.style.background=`hwb(${tonoBotones} 9.02% 35.29%)`;
                
                if (posicionEsfera==30) {
                    clearInterval(intervaloTiempo);
                    var arrayElemento=[botonEnc,botonDes,btnCopiar];
                    arrayElemento.forEach( elemento => {
                        elemento.addEventListener("mouseover",()=>{
                            elemento.style.background=btnColorOver;
                            elemento.addEventListener("mouseout",()=>{
                                elemento.style.background="hwb(117.04deg 9.02% 35.29%)";
                            })
                        })
                    });
                }
            };
        }else{
            if (posicionEsfera==30) {// is la esfera esta a la derecha
                var blanco=100;
                var tonoBtn=0;
                var tonoBody=0;
                var tonoSvg=-58;
                var tonoBotones=165.63;
                var intervaloTiempo=setInterval(moverIzquierda, 5);
                function moverIzquierda() {
                    posicionEsfera--;
                    esfera.style.left=`${posicionEsfera}px`;
                    esfera.style.background=`radial-gradient(circle at bottom,hwb(122 1% 5% / 0.8),hwb(112 ${blanco-=3.448275862068966}% 3%))`;
                    btnTheme.style.backgroundColor= `hwb(112 ${tonoBtn+=3.379310344827586}% 2%)`                    
                    body.style.background=`hwb(48 ${tonoBody+=2.758620689655172}% 10%)`;//colore fondo;
                    svgIcono.style.filter=`hue-rotate(${tonoSvg+=2}deg)`;
                    svgLupa.style.filter=`hue-rotate(${tonoSvg}deg)`;
                    botonEnc.style.background=`hwb(${tonoBotones+=1.626551724137931} 29.02% 12.16%)`;/*213*/
                    botonDes.style.background=`hwb(${tonoBotones} 29.02% 12.16%)`;/*213*/
                    botonCopy.style.background=`hwb(${tonoBotones} 29.02% 12.16%)`;/*213*/
                    
                    if (posicionEsfera==1) {
                        clearInterval(intervaloTiempo);
                        var arrayElemento=[botonEnc,botonDes,btnCopiar];
                        arrayElemento.forEach( elemento => {
                            elemento.addEventListener("mouseover",()=>{
                                elemento.style.background=btnColorOver;
                                elemento.addEventListener("mouseout",()=>{
                                    elemento.style.background="hwb(212.8deg 29.02% 12.16%)";
                                })
                            })
                        });
                        
                    }
                };
            }
        }
    }
}

const cambiar__tema= new btn();
btnTheme.addEventListener("click",()=>{
    cambiar__tema.cambiarTema();
});
