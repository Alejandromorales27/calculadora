let a;
let b;
let operando;

function init(){
    let resultado = document.getElementById("resultado");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let division = document.getElementById("division");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let multiplicacion = document.getElementById("multiplicacion");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let resta = document.getElementById("resta");
    let igual = document.getElementById("igual");
    let reset = document.getElementById("reset");
    let cero = document.getElementById("cero");
    let suma = document.getElementById("suma");

    uno.onclick=function(e){
        resultado.textContent=resultado.textContent +"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent +"2";
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent +"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent +"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent +"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent +"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent +"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent +"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent +"9";
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent +"0";
    }
     reset.onclick=function(e) {
          reinicio()
    }

    suma.onclick=function(e) {
        a = resultado.textContent
        operando = "+"
        limpiar();
  } 
    resta.onclick=function(e) {
        a = resultado.textContent
        operando = "-"
        limpiar();
    } 
    multiplicacion.onclick=function(e) {
        a = resultado.textContent
        operando = "x"
        limpiar();
    } 
    division.onclick=function(e) {
        a = resultado.textContent
        operando = "/"
        limpiar();
    } 
    igual.onclick=function(e) {
        b=resultado.textContent
        solucion()
    } 
    
}   

function limpiar(){
    resultado.textContent=""
}

function reinicio(){
    resultado.textContent="";
    a=0;
    b=0;
    operando="";
}



function solucion(){
    var salida;
    switch(operando){
        case "+":
        salida = (parseFloat(a)) + (parseFloat(b));
        break;
        case "-":
        salida = (parseFloat(a)) - (parseFloat(b));
        break
        case "/":
        salida = (parseFloat(a)) / (parseFloat(b));
        break
        case "x":
        salida = (parseFloat(a)) * (parseFloat(b));
        break
    }
    
    reinicio();
    resultado.textContent=salida;
}
