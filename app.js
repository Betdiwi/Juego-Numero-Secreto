
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10 ;
function asignarTextoElemento(elemento ,texto){
    // Creamos el Objeto "parrafo" de la clase "p"
    let ElementoHTML = document.querySelector(elemento)
    //Modificamos su atributo del objeto "parrafo" , estos atributos como los objetos son creados en el mismo Hmtl nosotros solo lo modificamos
    ElementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario==numeroSecreto);//se usa el "===" para que no solo verifique la igualdad de valor , sino tambien de tipo de dato
    if(numeroDeUsuario != numeroSecreto){
        intentos++;
        if(numeroDeUsuario<numeroSecreto){
            asignarTextoElemento("p","el numero es mayor");
        }else{
            asignarTextoElemento("p","el numero es menor");
        }
    }else{
        //El usuario acertó.
        asignarTextoElemento("p",`Felicidades! acertaste en ${intentos} ${(intentos == 1)? "intento":"intentos"}`);
        document.getElementById("valorUsuario").setAttribute("disabled",true);
        document.getElementById("Verificar").setAttribute("disabled",true);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    limpiarCaja();
    return;
}

function generarNumeroSecreto() {
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1 ;
    console.log(listaNumeroSorteados);
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
        document.getElementById("valorUsuario").setAttribute("disabled",true);
    }else{
        //Si el numero generado esat incluido  en la lista
        if(listaNumeroSorteados.includes(numeroAleatorio)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}

function limpiarCaja(){
    /*
    Si queriamos acceder a elemento de HTML
    */ 
    document.querySelector("#valorUsuario").value = '' ;
}

function condicionesIniciales(){
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function gameOver(){
    /*
        -limpiar la lista
        -habilitar el input
        -reiniciarJuego()
    */
   listaNumeroSorteados.splice(0,listaNumeroSorteados.length-1);
   reiniciarJuego();
}

function reiniciarJuego() {
    /*¿Que es reiniciar juego?
      -limpiar el numero
      -generar el nuemro aleatorio
      -desactivar el boton "nuevo Juego"
      -Iniciarlizar el numero de intentos
    */
   limpiarCaja();
   condicionesIniciales();
   document.getElementById("Verificar").removeAttribute("disabled");
   document.getElementById("valorUsuario").removeAttribute("disabled");
   document.getElementById("reiniciar").setAttribute("disabled","true")
   if(( numeroMaximo-listaNumeroSorteados.length) != 0){
    asignarTextoElemento("h1",`${ numeroMaximo-listaNumeroSorteados.length} ${( numeroMaximo-listaNumeroSorteados.length)==1? "juego":"juegos"} más ` );
   }else{
    asignarTextoElemento("h1",`GAME OVER` );
   }
}
asignarTextoElemento("h1","juego del numero secreto");
asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);

let numeroSecreto = generarNumeroSecreto();

