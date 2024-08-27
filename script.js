let contador=0;
let mensajeResultado = document.querySelector('.mensaje__resultado');
let textoIngesado = document.querySelector('.texto__de__entrada');
let derechaAbajo= document.querySelector('.derecha__abajo');
let derechaArriba= document.querySelector('.derecha__arriba');
let contenedorBotonCopiar=document.querySelector('.contenedor__boton__copiar');
let botonCopiar=document.querySelector('.boton__copiar');
let textoResultado=document.querySelector('.texto__resultado');

function encriptar(){
  contador ++
  let valor = textoIngesado.value.split("");
  console.log(valor)
  
  for(let i=0; i <valor.length; i++){
    switch(valor[i]){
      case "a":
        valor[i]="ai";
        break;
      case "e":
        valor[i]="enter";
        break;
      case "i":
        valor[i]="imes";
        break;
      case "o":
        valor[i]="ober";
        break;
      case "u":
        valor[i]="ufat";
        break;
      default:
        break;
    }
  }
  valor=valor.join("")
  textoResultado.textContent = valor;
  cambiarDisplay();
}

function desencriptar(){
  contador ++

  let valor = textoIngesado.value.split(" ")
   let palabrasABuscar=["ai", "enter", "imes", "ober", "ufat"];
   let letrasDeReemplazo=["a","e","i","o","u"];
    
   for (let i = 0; i < valor.length; i++) {
    let palabra = valor[i];
  
    for (let j = 0; j < palabrasABuscar.length; j++) {
      let palabraABuscar = palabrasABuscar[j];
      let letraReemplazo = letrasDeReemplazo[j];
  
      const regex = new RegExp(palabraABuscar, 'g');
      
      palabra = palabra.replace(regex, letraReemplazo);
    }
  
    valor[i] = palabra;
  }


  valor=valor.join(" ")
  textoResultado.textContent = valor;
  cambiarDisplay();
  return valor;
}

function cambiarDisplay(){
  if (contador>0){
mensajeResultado.classList.add('mostrar');
derechaAbajo.style.display="none";
derechaArriba.style.display="none";
contenedorBotonCopiar.style.display="flex";
}}

function copiarTexto(){
  navigator.clipboard.writeText(textoResultado.textContent);
}

let botonEncriptar= document.querySelector('.boton__encriptar');
let botonDesencriptar= document.querySelector('.boton__desencriptar');

botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click',copiarTexto);
